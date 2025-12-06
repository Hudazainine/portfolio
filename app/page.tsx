export default function Home() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Index - Personal Bootstrap Template</title>
      <meta name="description" content="Your description here" />
      <meta name="keywords" content="Your keywords here" />
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
      {/* =======================================================
  * Template Name: Personal
  * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
  * Updated: Mar 05 2025 with Bootstrap v5.3.3
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.webp" alt=""> */}
            <h1 className="sitename">Personal</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="index.html" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="resume.html">Resume</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <h2>Emily Jones</h2>
            <p>
              I'm{" "}
              <span
                className="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              />
              <span className="typed-cursor typed-cursor--blink" />
            </p>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
      </main>
      <footer id="footer" className="footer dark-background">
        <div className="container">
          <h3 className="sitename">Personal</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <div className="social-links d-flex justify-content-center">
            <a href="#">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#">
              <i className="bi bi-facebook" />
            </a>
            <a href="#">
              <i className="bi bi-instagram" />
            </a>
            <a href="#">
              <i className="bi bi-skype" />
            </a>
            <a href="#">
              <i className="bi bi-linkedin" />
            </a>
          </div>
          <div className="container">
            <div className="copyright">
              <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Personal</strong>{" "}
              <span>All Rights Reserved</span>
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you've purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Preloader */}
      <div id="preloader" />
      {/* Vendor JS Files */}
      {/* Main JS File */}
    </div>
  );
}
