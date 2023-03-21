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
    MATERIALUI: `Material-UI`,
    RUBY: "RubyOnRails",
    POSTGRES: "Postgresql",
    MONGO: "MongoDB",
  };

  const projectsData = [
    {
      title: "Journey Manager",
      projectInfo:
        "The application allows users to share journeys and comments, features user authorization/authentication, integrates Google maps based on the user's location, implements CRUD functionality for journeys and comments, enables liking of content, and supports administration management of the database.",
      // client: "Ruby Clinton",
      technologies: "RUBY ON RAILS, HTML, CSS, BOOTSTRAP, POSTGRESQL",
      // industry: "Art & Design",
      date: "July 16, 2022",
      url: {
        name: "https://journey.herokuapp.com/",
        link: "https://journey.herokuapp.com/",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/journey_2.png",
      sliderImages: [
        "images/projects/journey_1.png",
        "images/projects/journey_3.png",
      ],
      categories: [filters.HTML, filters.CSS, filters.RUBY, filters.MATERIALUI, filters.POSTGRES],
    },
    {
      title: "Search Nearby Work Website",
      projectInfo:
        "The application implements CRUD functionality for job postings and applications, supports user authorization for accessing job postings and applicants, includes a Google map search feature displaying job information, integrates an address search feature, and dynamically displays and updates data on card widgets and Google maps based on the user's current location.",
      // client: "Ruby Clinton",
      technologies: "HTML5, CSS, NODE, REACT, MATERIAL-UI, MONGODB",
      // industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "Search Nearby Work Website",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7034979441596387328/",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/work_5.png",
      sliderImages: [
        "images/projects/work_4.png",
        "images/projects/work_2.png",
        "images/projects/work_3.png",
        "images/projects/work_1.png",
      ],
      categories: [filters.REACT, filters.NODE, filters.JAVASCRIPT, filters.MATERIALUI, filters.MONGO, filters.HTML],
    },
    {
      title: "Travel advisor website",
      projectInfo:
        "a Google Maps search feature that dynamically displays nearby businesses' information, categorized by restaurants, attractions, hotels, cities, and weather based on the user's location. It also includes an advanced filter feature based on businesses' ratings.",
      // client: "Ruby Clinton",
      technologies: "HTML5, CSS, REACT, MATERIAL-UI, AXIOS",
      // industry: "Art & Design",
      date: "August 20, 2022",
      url: {
        name: "https://map-manger.herokuapp.com/",
        link: "https://map-manger.herokuapp.com/",
      },
      // socialLinks: {
      //   facebook: "http://www.facebook.com/",
      //   twitter: "http://www.twitter.com/",
      //   google: "http://www.google.com/",
      //   instagram: "http://www.instagram.com/",
      //   mail: "mailto:example@gmail.com",
      // },
      thumbImage: "images/projects/map_2.png",
      sliderImages: [
        "images/projects/map_1.png",
        "images/projects/map_3.png",
      ],
      categories: [filters.REACT, filters.JAVASCRIPT, filters.MATERIALUI, filters.HTML],
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
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
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
                      <div className="portfolio-img rounded">
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
