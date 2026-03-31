export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  type ContactForm = {
    name: string;
    email: string;
    phone?: string;
    interest?: string;
    message?: string;
  };

  const body: ContactForm = await req.json();

  const { name, email, phone, interest, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Kovai Overseas Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Enquiry — ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
</head>
<body style="margin:0;padding:24px 0;background:#0f172a;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0"
        style="max-width:560px;width:100%;background:#020617;border-radius:14px;overflow:hidden;border:1px solid #1e293b;">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#020617,#0f172a);padding:32px 40px;text-align:center;">
            <div style="font-size:26px;font-weight:700;color:#fff;">
              Kovai <span style="color:#facc15;">Overseas</span>
            </div>
            <div style="font-size:11px;color:#94a3b8;letter-spacing:.2em;text-transform:uppercase;margin-top:6px;">
              New Student Enquiry
            </div>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:36px 40px;">

            <div style="font-size:12px;font-weight:700;color:#facc15;letter-spacing:.12em;
              text-transform:uppercase;margin-bottom:18px;">
              Student Details
            </div>

            ${[
              ["Name", name],
              ["Email", email],
              ["Phone", phone],
              ["Interested In", interest],
            ]
              .map(
                ([key, val]) => `
            <table width="100%" cellpadding="0" cellspacing="0"
              style="margin-bottom:8px;border-radius:8px;overflow:hidden;">
              <tr>
                <td width="130" style="background:#020617;padding:12px 16px;font-size:11px;
                  font-weight:600;color:#94a3b8;text-transform:uppercase;">
                  ${key}
                </td>
                <td style="background:#0f172a;padding:12px 16px;font-size:14px;color:#fff;">
                  ${val || "-"}
                </td>
              </tr>
            </table>`,
              )
              .join("")}

            <!-- MESSAGE -->
            <table width="100%" cellpadding="0" cellspacing="0"
              style="margin-top:14px;border-radius:8px;overflow:hidden;">
              <tr>
                <td width="130" style="background:#020617;padding:14px 16px;font-size:11px;
                  font-weight:600;color:#94a3b8;text-transform:uppercase;vertical-align:top;">
                  Message
                </td>
                <td style="background:#0f172a;padding:14px 16px;font-size:14px;color:#fff;
                  line-height:1.6;">
                  ${message || "-"}
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:20px 40px;text-align:center;">
            <a href="mailto:${email}"
              style="display:inline-block;background:#facc15;color:#000;
              padding:12px 24px;border-radius:8px;font-size:13px;
              font-weight:700;text-decoration:none;">
              Reply to Student
            </a>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#020617;padding:18px 40px;text-align:center;border-top:1px solid #1e293b;">
            <p style="margin:0;font-size:11px;color:#64748b;">
              Kovai Overseas · Helping Students Study MBBS Abroad
            </p>
            <p style="margin:6px 0 0;font-size:11px;color:#475569;">
              www.kovaioverseas.com
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>
`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}