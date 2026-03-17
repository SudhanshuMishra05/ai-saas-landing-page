import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center mb-5">Pricing Plans</h2>

        <div className="row text-center">

          <div className="col-md-4">
            <div className="card pricing-card p-4">
              <h3>Free</h3>
              <h1>$0</h1>
              <p>Basic AI features</p>
              <button className="btn btn-outline-primary">Start Free</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card pricing-card p-4 border-primary shadow-lg">
              <h3>Pro</h3>
              <h1>$9</h1>
              <p>Unlimited AI tools</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card pricing-card p-4">
              <h3>Team</h3>
              <h1>$29</h1>
              <p>For organizations</p>
              <button className="btn btn-outline-primary">Contact</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;
