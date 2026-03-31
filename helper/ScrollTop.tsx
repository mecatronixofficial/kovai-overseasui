"use client";

import { useEffect, useState } from "react";
import { IconsHelper } from "./icon_helper";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  const ArrowUp = IconsHelper.Arrow || (() => <span>↑</span>);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button className="-rotate-90 bg-white text-black rounded-lg p-3 " onClick={scrollToTop}>
      <ArrowUp size={24} />
    </button>
  );
}