"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then(({ default: AOS }) => AOS.init());
      import("typed.js").then(({ default: Typed }) => {
        const el = document.querySelector(".typed");
        if (el) {
          new Typed(el, {
            strings: ["Designer", "Developer", "Freelancer"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <section id="hero" className="hero section">
          <img
            src="/assets/img/hero-bg.jpg"
            alt="Hero Background"
            data-aos="fade-in"
          />

          <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <h2>Houda Zaïnine</h2>
            <p>
              I'm{" "}
              <span
                className="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              ></span>
            </p>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
