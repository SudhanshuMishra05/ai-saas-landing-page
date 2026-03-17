import React from "react";

function Features() {
  return (
    <section id="features" className="py-5">
      <div className="container">

        <h2 className="text-center mb-5">Powerful AI Features</h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card feature-card p-4 text-center">
              <i className="bi bi-journal-text display-4 text-primary mb-3"></i>
              <h4>AI Notes</h4>
              <p>Generate complete study notes instantly.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card p-4 text-center">
              <i className="bi bi-lightning-charge display-4 text-primary mb-3"></i>
              <h4>Smart Summaries</h4>
              <p>Convert long documents into short summaries.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card p-4 text-center">
              <i className="bi bi-calendar-check display-4 text-primary mb-3"></i>
              <h4>Study Planner</h4>
              <p>AI generated daily study schedules.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;
