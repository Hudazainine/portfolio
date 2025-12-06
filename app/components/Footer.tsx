"use client";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
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

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
    </footer>
  );
}
