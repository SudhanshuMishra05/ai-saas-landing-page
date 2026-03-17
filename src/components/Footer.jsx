import React from "react";

function Footer() {
  return (
    <footer className="footer-section mt-5">
      <div className="container">

        <div className="row gy-4">

          <div className="col-md-4">
            <h5 className="fw-bold">PromptAI</h5>
            <p className="text-muted">
              AI-powered tools that help students generate notes,
              summaries and study plans faster.
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#pricing" className="footer-link">Pricing</a></li>
              <li><a href="#api" className="footer-link">API</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li><a href="#privacy" className="footer-link">Privacy</a></li>
            </ul>
          </div>

        </div>

        <hr className="my-4"/>

        <div className="text-center">
          <p className="mb-0 text-muted">
            © 2026 PromptAI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;