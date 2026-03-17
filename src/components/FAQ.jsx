import React from "react";

function FAQ() {
  return (
    <section className="bg-light py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Frequently Asked Questions
        </h2>

        <div className="accordion" id="faqAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                What is PromptAI?
              </button>
            </h2>

            <div
              id="faq1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                PromptAI is an AI platform that helps students generate
                notes, summaries and study plans quickly using artificial intelligence.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Is PromptAI free to use?
              </button>
            </h2>

            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes. PromptAI provides a free plan with basic features.
                You can upgrade to the Pro plan for advanced AI tools.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                Can I generate study schedules?
              </button>
            </h2>

            <div
              id="faq3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes. PromptAI can generate personalized study schedules
                based on your subjects and available study time.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;