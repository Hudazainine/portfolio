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
            strings: ["Designer", "Developer", "Freelancer", "Artist"],
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
        <title>Index - Style Bootstrap Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS */}
        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="/assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />

        {/* Main CSS */}
        <link href="/assets/css/main.css" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="header d-flex align-items-center fixed-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Link href="/" className="logo d-flex align-items-center">
            <h1 className="sitename">Alex Smith</h1>
          </Link>

          <nav className="navmenu">
            <div className="profile-img">
              <img
                src="/assets/img/profile/profile-square-1.webp"
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </div>

            <div className="social-links text-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bi bi-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
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
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main">
        <section id="hero" className="hero section">
          <div className="container">
            <div className="row g-0 align-items-center">
              <div
                className="col-lg-6 hero-content"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="content-wrapper">
                  <h1 className="hero-title">
                    Creative <span className="typed"></span>
                  </h1>
                  <p className="lead">
                    I create digital experiences that inspire and engage. With a
                    passion for clean design and innovative solutions, I
                    transform ideas into beautiful, functional realities.
                  </p>
                  <div
                    className="hero-stats"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="stat-item">
                      <span
                        className="purecounter"
                        data-purecounter-start="0"
                        data-purecounter-end="150"
                        data-purecounter-duration="2"
                      >
                        0
                      </span>
                      <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                      <span
                        className="purecounter"
                        data-purecounter-start="0"
                        data-purecounter-end="5"
                        data-purecounter-duration="2"
                      >
                        0
                      </span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span
                        className="purecounter"
                        data-purecounter-start="0"
                        data-purecounter-end="98"
                        data-purecounter-duration="2"
                      >
                        0
                      </span>
                      <span className="stat-label">Happy Clients</span>
                    </div>
                  </div>

                  <div
                    className="hero-actions"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <a href="#portfolio" className="btn btn-primary">
                      View My Work
                    </a>
                    <a href="#contact" className="btn btn-outline">
                      Get In Touch
                    </a>
                  </div>

                  <div
                    className="social-links"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 hero-image"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="image-container">
                  <div className="floating-elements">
                    <div
                      className="floating-card card-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <i className="bi bi-palette"></i>
                      <span>UI/UX Design</span>
                    </div>
                    <div
                      className="floating-card card-2"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <i className="bi bi-code-slash"></i>
                      <span>Development</span>
                    </div>
                    <div
                      className="floating-card card-3"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    >
                      <i className="bi bi-lightning"></i>
                      <span>Creative Ideas</span>
                    </div>
                  </div>
                  <img
                    src="/assets/img/profile/profile-square-1.webp"
                    alt="Portfolio Hero"
                    className="img-fluid hero-main-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
              <div className="col-lg-8">
                <div className="skills-grid">
                  <div className="row g-4">
                    {/* Design & Tools */}
                    <div
                      className="col-md-6"
                      data-aos="flip-left"
                      data-aos-delay={400}
                    >
                      <div className="skill-card">
                        <div className="skill-header">
                          <i className="bi bi-palette"></i>
                          <h3>Design &amp; Tools</h3>
                        </div>
                        <div className="skills-animation">
                          {[
                            { name: "Figma", value: 85 },
                            { name: "Photoshop", value: 70 },
                            { name: "Illustrator", value: 68 },
                          ].map((skill) => (
                            <div className="skill-item" key={skill.name}>
                              <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">
                                  {skill.value}%
                                </span>
                              </div>
                              <div className="skill-bar progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={skill.value}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: `${skill.value}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Cloud & DevOps */}
                    <div
                      className="col-md-6"
                      data-aos="flip-left"
                      data-aos-delay={500}
                    >
                      <div className="skill-card">
                        <div className="skill-header">
                          <i className="bi bi-cloud"></i>
                          <h3>Cloud &amp; DevOps</h3>
                        </div>
                        <div className="skills-animation">
                          {[
                            { name: "AWS", value: 76 },
                            { name: "Docker", value: 73 },
                            { name: "Git", value: 90 },
                          ].map((skill) => (
                            <div className="skill-item" key={skill.name}>
                              <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">
                                  {skill.value}%
                                </span>
                              </div>
                              <div className="skill-bar progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={skill.value}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: `${skill.value}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Summary */}
              <div className="col-lg-4">
                <div
                  className="skills-summary"
                  data-aos="fade-left"
                  data-aos-delay={200}
                >
                  <h3>Professional Expertise</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>

                  <div className="summary-stats">
                    {[
                      {
                        icon: "bi-trophy",
                        number: "5+",
                        label: "Years Experience",
                        delay: 300,
                      },
                      {
                        icon: "bi-diagram-3",
                        number: "50+",
                        label: "Projects Completed",
                        delay: 400,
                      },
                      {
                        icon: "bi-people",
                        number: "30+",
                        label: "Happy Clients",
                        delay: 500,
                      },
                    ].map((stat) => (
                      <div
                        className="stat-item"
                        data-aos="zoom-in"
                        data-aos-delay={stat.delay}
                        key={stat.label}
                      >
                        <div className="stat-circle">
                          <i className={`bi ${stat.icon}`}></i>
                        </div>
                        <div className="stat-info">
                          <span className="stat-number">{stat.number}</span>
                          <span className="stat-label">{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="skills-badges"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <h4>Certifications</h4>
                    <div className="badge-list">
                      {[
                        "AWS Certified",
                        "Laravel Expert",
                        "Vue.js Developer",
                        "UI/UX Design",
                      ].map((cert) => (
                        <div className="skill-badge" key={cert}>
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Resume Section */}
        <section id="resume" className="resume section">
          {/* Section Title */}
          <div className="container section-title">
            <h2>Resume</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
              {/* Experience Section */}
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <div className="experience-section">
                  <div className="section-header">
                    <h2>
                      <i className="bi bi-briefcase"></i> Professional Journey
                    </h2>
                    <p className="section-subtitle">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas vestibulum tortor quam.
                    </p>
                  </div>

                  <div className="experience-cards">
                    {[
                      {
                        title: "Technical Director",
                        company: "Proin Corporation",
                        duration: "2022 - Present",
                        description:
                          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra veniam sit amet lacus cursus.",
                        achievements: [
                          "Managed cross-functional teams of 15+ professionals",
                          "Implemented agile methodologies resulting in 40% efficiency gain",
                          "Led digital transformation initiatives worth $2M+",
                        ],
                        delay: 300,
                      },
                      {
                        title: "Senior Development Manager",
                        company: "Consectetur Solutions Inc",
                        duration: "2018 - 2022",
                        description:
                          "Donec quam felis ultricies nec pellentesque eu pretium quis sem nulla consequat massa quis enim donec pede justo fringilla vel.",
                        achievements: [],
                        delay: 400,
                      },
                      {
                        title: "Product Development Specialist",
                        company: "Adipiscing Technologies",
                        duration: "2015 - 2018",
                        description:
                          "Nam quam nunc blandit vel luctus pulvinar hendrerit id lorem maecenas nec odio et ante tincidunt tempus donec vitae sapien ut.",
                        achievements: [],
                        delay: 500,
                      },
                    ].map((exp) => (
                      <div
                        className="experience-card"
                        data-aos="zoom-in"
                        data-aos-delay={exp.delay}
                        key={exp.title}
                      >
                        <div className="card-header">
                          <div className="role-info">
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                          </div>
                          <span className="duration">{exp.duration}</span>
                        </div>
                        <div className="card-body">
                          <p>{exp.description}</p>
                          {exp.achievements.length > 0 && (
                            <ul className="achievements">
                              {exp.achievements.map((ach, index) => (
                                <li key={index}>{ach}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="education-section">
                  <div className="section-header">
                    <h2>
                      <i className="bi bi-mortarboard"></i> Academic Excellence
                    </h2>
                    <p className="section-subtitle">
                      Lorem ipsum dolor sit amet consectetuer adipiscing elit
                      aenean commodo ligula eget dolor aenean massa.
                    </p>
                  </div>

                  <div className="education-timeline">
                    <div className="timeline-track"></div>
                    {[
                      {
                        degree: "Master of Computer Science",
                        year: "2015 - 2017",
                        institution: "Tempus University",
                        description:
                          "Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec quam felis ultricies nec.",
                        delay: 300,
                      },
                      {
                        degree: "Bachelor of Information Technology",
                        year: "2011 - 2015",
                        institution: "Rhoncus Institute of Technology",
                        description:
                          "Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.",
                        delay: 400,
                      },
                      {
                        degree: "Certificate in Digital Innovation",
                        year: "2020",
                        institution: "Ligula Academy",
                        description:
                          "Etiam sit amet orci eget eros faucibus tincidunt duis leo sed fringilla mauris sit amet nibh donec sodales sagittis magna.",
                        delay: 500,
                      },
                    ].map((edu) => (
                      <div
                        className="education-item"
                        data-aos="slide-up"
                        data-aos-delay={edu.delay}
                        key={edu.degree}
                      >
                        <div className="timeline-marker"></div>
                        <div className="education-content">
                          <div className="degree-header">
                            <h3>{edu.degree}</h3>
                            <span className="year">{edu.year}</span>
                          </div>
                          <h4 className="institution">{edu.institution}</h4>
                          <p>{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services section">
          <div className="container section-title">
            <h2>Services</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row g-4">
              {[
                {
                  icon: "bi-stack",
                  title: "Digital Solutions",
                  description:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
                  delay: 100,
                },
                {
                  icon: "bi-shield-check",
                  title: "Secure Systems",
                  description:
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
                  delay: 200,
                },
                {
                  icon: "bi-graph-up",
                  title: "Growth Strategy",
                  description:
                    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.",
                  delay: 300,
                },
                {
                  icon: "bi-cpu",
                  title: "AI Integration",
                  description:
                    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
                  delay: 100,
                },
                {
                  icon: "bi-cloud-arrow-up",
                  title: "Cloud Services",
                  description:
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.",
                  delay: 200,
                },
                {
                  icon: "bi-gear",
                  title: "Process Automation",
                  description:
                    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
                  delay: 300,
                },
              ].map((service) => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                  key={service.title}
                >
                  <div className="service-item">
                    <div className="icon">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="card-links">
                      <a href="#" className="link-item">
                        Learn More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          <div className="container section-title">
            <h2>Portfolio</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div
            className="container-fluid"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {[
                  {
                    filter: "*",
                    label: "All Projects",
                    icon: "bi-grid-3x3",
                    active: true,
                  },
                  { filter: ".filter-ui", label: "UI/UX" },
                  { filter: ".filter-development", label: "Development" },
                  { filter: ".filter-photography", label: "Photography" },
                  { filter: ".filter-marketing", label: "Marketing" },
                ].map((f) => (
                  <li
                    key={f.label}
                    data-filter={f.filter}
                    className={f.active ? "filter-active" : ""}
                  >
                    {f.icon && <i className={`bi ${f.icon}`}></i>} {f.label}
                  </li>
                ))}
              </ul>

              <div
                className="row g-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                {[
                  {
                    img: "assets/img/portfolio/portfolio-1.webp",
                    category: "UI/UX Design",
                    title: "Mobile Banking App",
                    gallery: "portfolio-gallery-ui",
                    description:
                      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
                    filterClass: "filter-ui",
                  },
                  {
                    img: "assets/img/portfolio/portfolio-10.webp",
                    category: "Development",
                    title: "E-Learning Platform",
                    gallery: "portfolio-gallery-development",
                    description:
                      "Nulla vitae elit libero, a pharetra augue mollis interdum.",
                    filterClass: "filter-development",
                  },
                  {
                    img: "assets/img/portfolio/portfolio-7.webp",
                    category: "Photography",
                    title: "Urban Architecture",
                    gallery: "portfolio-gallery-photography",
                    description:
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
                    filterClass: "filter-photography",
                  },
                  {
                    img: "assets/img/portfolio/portfolio-4.webp",
                    category: "Marketing",
                    title: "Social Media Campaign",
                    gallery: "portfolio-gallery-marketing",
                    description:
                      "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
                    filterClass: "filter-marketing",
                  },
                  // Ajoute ici les autres items portfolio si nécessaire
                ].map((item) => (
                  <div
                    className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item ${item.filterClass}`}
                    key={item.title}
                  >
                    <article className="portfolio-entry">
                      <figure className="entry-image">
                        <img
                          src={item.img}
                          className="img-fluid"
                          alt={item.title}
                          loading="lazy"
                        />
                        <div className="entry-overlay">
                          <div className="overlay-content">
                            <div className="entry-meta">{item.category}</div>
                            <h3 className="entry-title">{item.title}</h3>
                            <div className="entry-links">
                              <a
                                href={item.img}
                                className="glightbox"
                                data-gallery={item.gallery}
                                data-glightbox={`title: ${item.title}; description: ${item.description}`}
                              >
                                <i className="bi bi-arrows-angle-expand"></i>
                              </a>
                              <a href="portfolio-details.html">
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section">
          <div className="container section-title">
            <h2>Testimonials</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
              <div className="col-12">
                <div
                  className="critic-reviews"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="row">
                    {[
                      {
                        stars: 5,
                        text: "Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
                        name: "The New York Times",
                      },
                      {
                        stars: 4.5,
                        text: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.",
                        name: "Washington Post",
                      },
                      {
                        stars: 5,
                        text: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.",
                        name: "The Guardian",
                      },
                    ].map((review, i) => (
                      <div className="col-md-4" key={i}>
                        <div className="critic-review">
                          <div className="review-quote">"</div>
                          <div className="stars">
                            {Array.from({ length: 5 }, (_, idx) => {
                              if (review.stars - idx >= 1)
                                return (
                                  <i key={idx} className="bi bi-star-fill"></i>
                                );
                              if (review.stars - idx === 0.5)
                                return (
                                  <i key={idx} className="bi bi-star-half"></i>
                                );
                              return <i key={idx} className="bi bi-star"></i>;
                            })}
                          </div>
                          <p>{review.text}</p>
                          <div className="critic-info">
                            <div className="critic-name">{review.name}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Swiper Testimonials Slider */}
                <div className="testimonials-container">
                  <div
                    className="swiper testimonials-slider init-swiper"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="swiper-wrapper">
                      {[
                        {
                          stars: 5,
                          text: "Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.",
                          img: "assets/img/person/person-f-1.webp",
                          name: "Jane Smith",
                          role: "Book Enthusiast",
                        },
                        {
                          stars: 5,
                          text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus.",
                          img: "assets/img/person/person-m-2.webp",
                          name: "Michael Johnson",
                          role: "Sci-Fi Blogger",
                        },
                        {
                          stars: 4.5,
                          text: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.",
                          img: "assets/img/person/person-f-3.webp",
                          name: "Emily Davis",
                          role: "Book Club President",
                        },
                        {
                          stars: 5,
                          text: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur.",
                          img: "assets/img/person/person-m-4.webp",
                          name: "Robert Wilson",
                          role: "Literary Reviewer",
                        },
                      ].map((item, idx) => (
                        <div className="swiper-slide" key={idx}>
                          <div className="testimonial-item">
                            <div className="stars">
                              {Array.from({ length: 5 }, (_, sidx) => {
                                if (item.stars - sidx >= 1)
                                  return (
                                    <i
                                      key={sidx}
                                      className="bi bi-star-fill"
                                    ></i>
                                  );
                                if (item.stars - sidx === 0.5)
                                  return (
                                    <i
                                      key={sidx}
                                      className="bi bi-star-half"
                                    ></i>
                                  );
                                return (
                                  <i key={sidx} className="bi bi-star"></i>
                                );
                              })}
                            </div>
                            <p>{item.text}</p>
                            <div className="testimonial-profile">
                              <img
                                src={item.img}
                                alt={item.name}
                                className="img-fluid rounded-circle"
                              />
                              <div>
                                <h3>{item.name}</h3>
                                <h4>{item.role}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
                {/* Overall Rating */}
                <div className="row">
                  <div className="col-12 text-center" data-aos="fade-up">
                    <div className="overall-rating">
                      <div className="rating-number">4.8</div>
                      <div className="rating-stars">
                        {[1, 2, 3, 4].map((n) => (
                          <i key={n} className="bi bi-star-fill"></i>
                        ))}
                        <i className="bi bi-star-half"></i>
                      </div>
                      <p>Based on 230+ reviews</p>
                      <div className="rating-platforms">
                        <span>Goodreads</span>
                        <span>Amazon</span>
                        <span>Barnes &amp; Noble</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
