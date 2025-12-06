"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialisation AOS
      require("aos/dist/aos.css");
      require("aos").init();

      // Initialisation Typed.js
      import("typed.js").then(({ default: Typed }) => {
        const el = document.querySelector(".typed");
        if (el) {
          new Typed(el, {
            strings: ["Designer", "Developer", "Freelancer", "Photographer"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
          });
        }
      });
    }
  }, []);
  return <>{/* Ton code JSX ici */}</>;
}
