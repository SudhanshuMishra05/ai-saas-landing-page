import React from "react";

function Hero() {
  return (
    <section className="hero-section">

      <div className="container text-center">

        <h1 className="display-3 fw-bold mb-4">
          AI Tools for Smart Students
        </h1>

        <p className="lead mb-4">
          Generate notes, summaries and study plans instantly using AI.
        </p>

        <button className="btn btn-primary btn-lg me-3">
          Start Free
        </button>

        <button className="btn btn-outline-light btn-lg">
          Live Demo
        </button>

      </div>

    </section>
  );
}

export default Hero;