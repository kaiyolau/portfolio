import React from "react";

const stats = [
  { value: "~500", label: "active users" },
  { value: "6", label: "partner music schools" },
  { value: "95", label: "SQL migrations with RLS" },
  { value: "350+", label: "test files" },
];

const FeaturedProject = ({ classicHeader, darkTheme }) => {
  return (
    <section
      id="featured"
      className={"section pt-0 " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        <div
          className="rounded p-4 p-md-5 text-white shadow"
          style={{
            background: "linear-gradient(135deg, #2b1055 0%, #7597de 100%)",
          }}
        >
          <span className="badge bg-warning text-dark fw-600 mb-3">
            <i className="fas fa-star me-1" />
            Featured Project
          </span>
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <h2 className="text-9 fw-700 text-white mb-2">Soniphoria</h2>
              <p className="text-5 mb-3 text-white">
                AI-powered music education platform. I founded it in March 2025
                and lead its engineering as CEO and Lead Software Engineer.
              </p>
              <p className="text-white-50 mb-4">
                React + TypeScript web app with role-based workflows for
                students, parents, teachers and school admins (homework,
                practice tracking, progress reports), a bilingual English /
                Chinese interface, a FastAPI back end with an arq/Redis worker,
                Supabase PostgreSQL with Row-Level Security, Stripe
                subscriptions, and Cloudflare Workers + R2.
              </p>
              <a
                href="https://soniphoria.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light rounded-pill shadow-none fw-600"
              >
                Visit soniphoria.app
                <i className="fas fa-external-link-alt ms-2" />
              </a>
            </div>
            <div className="col-lg-5">
              <div className="row g-3 text-center">
                {stats.map((s) => (
                  <div className="col-6" key={s.label}>
                    <div className="rounded p-3 bg-white bg-opacity-10">
                      <div className="text-10 fw-700 text-white">{s.value}</div>
                      <div className="text-white-50">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
