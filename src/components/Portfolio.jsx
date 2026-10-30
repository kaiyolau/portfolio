import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    HTML: "HTML",
    NODE: "Node",
    REACT: "React",
    JAVASCRIPT: "Javascript",
    TYPESCRIPT: "TypeScript",
    PYTHON: "Python",
    JAVA: "Java",
    MATERIALUI: `Material-UI`,
    RUBY: "RubyOnRails",
    POSTGRES: "Postgresql",
    MONGO: "MongoDB",
  };

  const projectsData = [
    {
      title: "Soniphoria",
      featured: true,
      projectInfo:
        "AI-powered music education platform that I founded and lead as CEO and Lead Software Engineer. It serves music students, parents, teachers, and school admins with role-based workflows for homework, practice tracking, and progress reports, and has a bilingual English/Chinese interface. Grown to approximately 500 active users, with up to 6 partner local music schools.",
      technologies:
        "REACT, TYPESCRIPT, VITE, TAILWIND CSS, FASTAPI, REDIS, SUPABASE (POSTGRESQL, RLS), STRIPE, CLOUDFLARE WORKERS & R2, DOCKER, GITHUB ACTIONS",
      date: "March 2025 - Present",
      url: {
        name: "https://soniphoria.app/",
        link: "https://soniphoria.app/",
      },
      thumbImage: "images/projects/soniphoria_1.png",
      sliderImages: [
        "images/projects/soniphoria_2.png",
        "images/projects/soniphoria_3.png",
        "images/projects/soniphoria_4.png",
      ],
      categories: [filters.REACT, filters.TYPESCRIPT, filters.PYTHON, filters.POSTGRES],
    },
    {
      title: "Timesheet & Project Management System",
      projectInfo:
        "BCIT COMP 4911 team project (20+ students): a web app for timesheets, projects, and work packages. Jakarta EE REST API (JAX-RS, EJB, JPA) on WildFly with MySQL and an ASP.NET Razor Pages front end, containerized with Docker and deployed to OpenShift. I built the work-package module: database tables, role-based access (employees see only their assigned work packages), responsible-engineer assignment, and a rule locking the work-package structure after the first approved charge, with JUnit and REST Assured integration tests.",
      technologies:
        "JAKARTA EE, JAX-RS, EJB, JPA, WILDFLY, MYSQL, ASP.NET RAZOR PAGES, DOCKER, OPENSHIFT, JUNIT 5, REST ASSURED",
      date: "January 2026 - April 2026",
      notice:
        "Live demo with sample data on free hosting: if nobody has used it for a while it goes to sleep, and the first load can take a few minutes while the Java server wakes up. Demo login: Employee ID 1 (admin), password: password. The original BCIT deployment ran on the school network (VPN) and is no longer reachable.",
      urls: [
        {
          label: "Live demo",
          name: "https://pm-frontend-qlbs.onrender.com/",
          link: "https://pm-frontend-qlbs.onrender.com/",
        },
        {
          label: "API",
          name: "https://pm-backend-prtx.onrender.com/",
          link: "https://pm-backend-prtx.onrender.com/",
        },
        {
          label: "GitHub",
          name: "BCIT-4911/COMP-4911-project",
          link: "https://github.com/BCIT-4911/COMP-4911-project",
        },
      ],
      thumbImage: "images/projects/comp4911_live_1.png",
      sliderImages: [
        "images/projects/comp4911_live_2.png",
        "images/projects/comp4911_live_3.png",
        "images/projects/comp4911_2.png",
      ],
      categories: [filters.JAVA],
    },
    {
      title: "Journey Manager",
      projectInfo:
        "The application allows users to share journeys and comments, features user authorization/authentication, integrates Google maps based on the user's location, implements CRUD functionality for journeys and comments, enables liking of content, and supports administration management of the database.",
      // client: "Ruby Clinton",
      technologies: "RUBY ON RAILS, HTML, CSS, BOOTSTRAP, POSTGRESQL",
      // industry: "Art & Design",
      date: "August 2022",
      urls: [
        {
          label: "Live",
          name: "https://journey-rail.onrender.com/",
          link: "https://journey-rail.onrender.com/",
        },
        {
          label: "GitHub",
          name: "kaiyolau/journey_rail",
          link: "https://github.com/kaiyolau/journey_rail",
        },
      ],
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/journey_2.png",
      sliderImages: [
        "images/projects/journey_live.png",
        "images/projects/journey_1.png",
        "images/projects/journey_3.png",
      ],
      categories: [filters.HTML, filters.RUBY, filters.POSTGRES],
    },
    {
      title: "Search Nearby Work Website",
      projectInfo:
        "The application implements CRUD functionality for job postings and applications, supports user authorization for accessing job postings and applicants, includes a Google map search feature displaying job information, integrates an address search feature, and dynamically displays and updates data on card widgets and Google maps based on the user's current location.",
      // client: "Ruby Clinton",
      technologies: "HTML5, CSS, NODE, REACT, MATERIAL-UI, MONGODB",
      // industry: "Art & Design",
      date: "February 2022",
      urls: [
        {
          label: "Live",
          name: "https://work-search-snw7.onrender.com/",
          link: "https://work-search-snw7.onrender.com/",
        },
        {
          label: "GitHub",
          name: "kaiyolau/work_search",
          link: "https://github.com/kaiyolau/work_search",
        },
        {
          label: "LinkedIn",
          name: "Project post",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7034979441596387328/",
        },
      ],
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/work_5.png",
      sliderImages: [
        "images/projects/work_live.png",
        "images/projects/work_4.png",
        "images/projects/work_2.png",
        "images/projects/work_3.png",
        "images/projects/work_1.png",
      ],
      categories: [filters.REACT, filters.NODE, filters.JAVASCRIPT, filters.MATERIALUI, filters.MONGO, filters.HTML],
    },
    // {
    //   title: "Project Title 4",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-4.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-4.jpg",
    //   ],
    //   categories: [filters.BRAND, filters.PHOTOS],
    // },
    // {
    //   title: "Project Title 5",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-5.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.DESIGN],
    // },
    // {
    //   title: "Project Title 6",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-6.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.BRAND],
    // },
    // {
    //   title: "Project Title 7",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-7.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.DESIGN, filters.PHOTOS],
    // },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Project Experience
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs flex-wrap justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded position-relative">
                        {project.vpnOnly && (
                          <span
                            className="badge bg-secondary position-absolute"
                            style={{ top: 10, left: 10, zIndex: 2 }}
                          >
                            <i className="fas fa-lock me-1" />
                            School network only
                          </span>
                        )}
                        {project.featured && (
                          <span
                            className="badge bg-warning text-dark fw-600 position-absolute"
                            style={{ top: 10, left: 10, zIndex: 2 }}
                          >
                            <i className="fas fa-star me-1" />
                            Featured
                          </span>
                        )}
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-name">
                            <h5 className="fw-400">
                              {project.title}
                              {project.featured && (
                                <i className="fas fa-star text-warning ms-2" />
                              )}
                            </h5>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>

      </div>
    </>
  );
};

export default Portfolio;
