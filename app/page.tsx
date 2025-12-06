"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init(); // Initialisation AOS

    // Initialisation Typed.js côté client seulement
    if (typeof window !== "undefined") {
      import("typed.js").then(({ default: Typed }) => {
        const el = document.querySelector(".typed");
        if (el) {
          const typed = new Typed(el, {
            strings: ["Designer", "Developer", "Freelancer", "Photographer"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
          });

          // Nettoyage pour éviter fuite mémoire
          return () => typed.destroy();
        }
      });
    }
  }, []);

  return (
    <>
      <div>
        <h2>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
          <span className="typed-cursor typed-cursor--blink"></span>
        </h2>
      </div>
    </>
  );
}
