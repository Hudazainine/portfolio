// app/about/About.tsx
"use client";

export default function About() {
  return (
    <main className="about-page">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>About</h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">About</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* About Section */}
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
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> 1 May 1995
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> www.example.com
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> +123 456 7890
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> New York, USA
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> 30
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> Master
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong> email@example.com
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {[
              { icon: "bi-emoji-smile", value: 232, label: "Happy Clients" },
              { icon: "bi-journal-richtext", value: 521, label: "Projects" },
              { icon: "bi-headset", value: 1463, label: "Hours Of Support" },
              { icon: "bi-people", value: 15, label: "Hard Workers" },
            ].map((stat, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-6 d-flex flex-column align-items-center"
              >
                <i className={`bi ${stat.icon}`}></i>
                <div className="stats-item">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end={stat.value}
                    data-purecounter-duration="1"
                  ></span>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <div>
            <span>My</span> <span className="description-title">Skills</span>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              {[
                { name: "HTML", value: 100 },
                { name: "CSS", value: 90 },
                { name: "JavaScript", value: 75 },
              ].map((skill, i) => (
                <div key={i} className="progress">
                  <span className="skill">
                    {skill.name} <i className="val">{skill.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.value}%` }}
                      aria-valuenow={skill.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              {[
                { name: "PHP", value: 80 },
                { name: "WordPress/CMS", value: 90 },
                { name: "Photoshop", value: 55 },
              ].map((skill, i) => (
                <div key={i} className="progress">
                  <span className="skill">
                    {skill.name} <i className="val">{skill.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.value}%` }}
                      aria-valuenow={skill.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="interests section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <div>
            <span>I'm</span>{" "}
            <span className="description-title">interested in</span>
          </div>
        </div>
        <div className="container">
          <div className="row gy-4">
            {[
              { icon: "bi-eye", color: "#ffbb2c", title: "Lorem Ipsum" },
              { icon: "bi-infinity", color: "#5578ff", title: "Dolor Sitema" },
              {
                icon: "bi-mortarboard",
                color: "#e80368",
                title: "Sed perspiciatis",
              },
              { icon: "bi-nut", color: "#e361ff", title: "Magni Dolores" },
              { icon: "bi-shuffle", color: "#47aeff", title: "Nemo Enim" },
              { icon: "bi-star", color: "#ffa76e", title: "Eiusmod Tempor" },
              { icon: "bi-x-diamond", color: "#11dbcf", title: "Midela Teren" },
              { icon: "bi-camera-video", color: "#4233ff", title: "Pira Neve" },
              { icon: "bi-command", color: "#b2904f", title: "Dirada Pack" },
              { icon: "bi-dribbble", color: "#b20969", title: "Moton Ideal" },
              { icon: "bi-activity", color: "#ff5828", title: "Verdo Park" },
              {
                icon: "bi-brightness-high",
                color: "#29cc61",
                title: "Flavor Nivelanda",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
              >
                <div className="features-item">
                  <i
                    className={`bi ${feature.icon}`}
                    style={{ color: feature.color }}
                  ></i>
                  <h3>
                    <a href="#" className="stretched-link">
                      {feature.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
