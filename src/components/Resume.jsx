import React from "react";
import resumeFile from "../documents/kyle_resume+coverLetter.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "April - August, 2022",
      title: "CodeCore Developer Bootcamp",
      place: "CodeCore College in Vancouver",
      desc: "Learning HTML, CSS, JavaScript, Node.js, Ruby on Rails, React.js and gaining hands-on experience with these languages involves acquiring a strong foundation in web development.",
      desc2:"Including front-end design, back-end programming, and the ability to build dynamic and responsive web applications using a variety of programming languages and frameworks."
    },
    {
      yearRange: "2016 - 2017",
      title: "Professional Recording Art",
      place: "LaSalle College",
      desc: "design sound for gaming audio and engineering the process of music production including sound synthesis, digital signal processing, and mixing and mastering techniques",
    },

  ];

  const experienceDetails = [
    {
      yearRange: "February 2023 - present",
      title: "Open-Source Full-Stack Developer",
      place: "Opentree Education",
      desc: "Designing a graded assessment system within the App will enable users to track their progress and receive personalized feedback.",
      desc2: "Agile environments and collaborating with diverse teams.",
      desc3: "Participating in sprint planning, daily stand-ups, and retrospectives ensure project deliverables met timelines and quality standards."
    },
    {
      yearRange: "2018 - 2022",
      title: "Music & Sound Engineer",
      place: "ArtiMusic Academy",
      desc: "Expertise in vocal recording, audio editing, mixing and mastering for final production.",
      desc2: "Experienced music instructor offering guitar, piano, and cello lessons to students of all ages, from individual to group settings."
    }
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 55,
    },
    {
      name: "HTML/CSS",
      percent: 90,
    },
    {
      name: "JavaScript",
      percent: 90,
    },
    {
      name: "React JS",
      percent: 95,
    },
    {
      name: "Node Js",
      percent: 70,
    },
    {
      name: "Material-UI & Bootstrap",
      percent: 60,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc2}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc2}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc3}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        {/* <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div> */}
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
