import React from "react";
import resumeFile from "../documents/Kyle_Lau_Resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "Graduated June 2026",
      title: "Computer Systems Technology (Information Systems option)",
      place: "British Columbia Institute of Technology (BCIT)",
      desc: "COMP 3910 (Full-Stack Development for Enterprise Systems): Jakarta Faces, CDI, JDBC, JPA, JAX-RS.",
      desc2: "COMP 4911 (Developing Enterprise Services): EJB, JPQL, EJB security and transactions, Unified Process.",
    },
    {
      yearRange: "April - September, 2022",
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
      yearRange: "March 2025 - present",
      title: "Founder & CEO / Lead Software Engineer",
      place: "Soniphoria (soniphoria.app)",
      desc: "Founded and lead development of an AI-powered music education platform for students, parents, teachers and schools, grown to approximately 500 active users, with up to 6 partner local music schools.",
      desc2: "React + TypeScript web app, FastAPI back end with an arq/Redis worker, Supabase PostgreSQL (95 migrations, Row-Level Security), Stripe subscriptions, Cloudflare Workers + R2.",
      desc3: "Dockerized API and worker services, GitHub Actions CI, and 350+ Vitest and pytest test files."
    },
    {
      yearRange: "February 2023 - May 2023",
      title: "Full-Stack Developer Intern",
      place: "Opentree Education",
      desc: "Built a graded assessment feature with progress tracking and personalized feedback (TypeScript, React, Material-UI, Express, MySQL, Docker).",
      desc2: "Fixed bugs and submitted GitHub pull requests.",
      desc3: "Took part in sprint planning, daily stand-ups, and retrospectives."
    },
    {
      yearRange: "Mar 2022 - Aug 2022",
      title: "Coding instructor & Assistant",
      place: "Code Ninjas Richmond ",
      desc: "Experienced coding instructor taught students the fundamentals of HTML, CSS, and JavaScript to enable them to create functional websites for the age group of teenagers.",
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
