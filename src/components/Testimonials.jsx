import React from "react";

function Testimonials() {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        What Students Say
      </h2>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-4 text-center">
            <p className="mb-3">
              PromptAI helped me summarize entire chapters in seconds.
              My study time reduced a lot!
            </p>
            <h6 className="fw-bold mb-0">Alex Johnson</h6>
            <small className="text-muted">Computer Science Student</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-4 text-center">
            <p className="mb-3">
              The AI notes feature is amazing. I use it daily for exam
              preparation.
            </p>
            <h6 className="fw-bold mb-0">Maria Lopez</h6>
            <small className="text-muted">Medical Student</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-4 text-center">
            <p className="mb-3">
              Best productivity tool for students. The study planner
              feature is a lifesaver.
            </p>
            <h6 className="fw-bold mb-0">David Kim</h6>
            <small className="text-muted">Engineering Student</small>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;