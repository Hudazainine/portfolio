"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init();

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

  return (
    <div className="awesome" style={{ border: "1px solid red" }}>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" />
    </div>
  );
}
