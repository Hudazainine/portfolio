"use client";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src="/assets/img/profile-img.jpg"
              className="img-fluid"
              alt="Profile"
            />
          </div>
          <div className="col-lg-8 content">
            <h2>UI/UX Designer & Web Developer</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <strong>Birthday:</strong> 1 May 1995
                  </li>
                  <li>
                    <strong>Website:</strong> www.example.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +123 456 7890
                  </li>
                  <li>
                    <strong>City:</strong> New York, USA
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <strong>Age:</strong> 30
                  </li>
                  <li>
                    <strong>Degree:</strong> Master
                  </li>
                  <li>
                    <strong>Email:</strong> email@example.com
                  </li>
                  <li>
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
