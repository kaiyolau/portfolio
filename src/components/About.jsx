import React from "react";
import resumeFile from "../documents/kyle_resume+coverLetter.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <p
            className={
              "text-22 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb5 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            <span className="text-primary">Kyle Lau</span>
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* Heading end*/}
        <div className="row gy-5">

          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <p className={darkTheme ? "text-white-50" : ""}>
            Hello, my name is Kyle, I'm a full-stack software developer. My favorite musical instruments are electric Guitar, Drum, and Cello.
            Besides my programming profession, I also released an album. Search "Kyle Lau" on Spotify if you like.
            </p>
            {/* <p className={darkTheme ? "text-white-50" : ""}>
            Over the course of my career, I have built three web applications from backend to frontend. In doing so,
            I have designed databases using <span className="fw-600 me-2">JavaScript, Node.js, and MongoDB,</span> and have gained experience in sending and responding to HTTP requests.
            Additionally, I have utilized <span className="fw-600 me-2"> React and Redux </span>to build intuitive user interfaces.
            </p> */}

          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Kyle Lau
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">kaiyolau@gmail.com</a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Vancouver,
                  British Columbia, Canada
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/* <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>3</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>1</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                Agile team experience
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
