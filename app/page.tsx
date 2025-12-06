"use client";
import { useEffect } from "react";
import Head from "next/head";
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
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Index - Personal Bootstrap Template</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS Files */}
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />

        {/* Main CSS File */}
        <link href="assets/css/main.css" rel="stylesheet" />
      </Head>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <h1 className="sitename">Houda.dev</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section ">
          <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

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

      <footer id="footer" className="footer ">
        <div className="container">
          <h3 className="sitename">Personal</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil.</p>

          <div className="social-links d-flex justify-content-center">
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
              <i className="bi bi-skype"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      <div id="preloader"></div>
    </>
  );
}
