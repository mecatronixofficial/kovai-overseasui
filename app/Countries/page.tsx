import { Suspense } from "react";
import CountriesClientPage from "./CountriesClientPage";

function CountriesPageFallback() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1e3d] via-[#12315f] to-[#0f4d73] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-10">
            <div>
              <span className="inline-flex rounded-full border border-[#c9a84c]/40 bg-white/10 px-4 py-1 text-xs font-medium text-[#f0d889] sm:text-sm">
                Study Abroad • Medical Education
              </span>

              <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Study MBBS Abroad
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg">
                Loading country details...
              </p>
            </div>

            <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:rounded-[28px] sm:p-6">
              <h2 className="mb-4 text-xl font-bold text-white sm:mb-5 sm:text-2xl">
                Loading...
              </h2>
              <div className="grid gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-14 rounded-2xl border border-white/10 bg-white/5"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function CountriesPage() {
  return (
    <Suspense fallback={<CountriesPageFallback />}>
      <CountriesClientPage />
    </Suspense>
  );
}