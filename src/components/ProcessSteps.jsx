import { useState } from "react";

const steps = [
  {
    number: "1",
    title: "Define the Question",
    blurb:
      "Clarify the business goal, success metric, and what decision the analysis should support."
  },
  {
    number: "2",
    title: "Prepare the Data",
    blurb:
      "Clean, structure, and validate the data so the analysis is reliable and ready for analysis."
  },
  {
    number: "3",
    title: "Analyze the Data",
    blurb:
      "Explore trends, compare segments, and apply the right methods to answer the core question."
  },
  {
    number: "4",
    title: "Deliver Insights",
    blurb:
      "Turn results into clear visuals, findings, and recommendations stakeholders can act on."
  }
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="process-grid">
      {steps.map((step, index) => (
        <div key={step.number} className="process-item-wrap">
          <button
            className={`process-item ${activeStep === index ? "active" : ""}`}
            onClick={() => setActiveStep(activeStep === index ? null : index)}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
            type="button"
          >
            <span className="process-number">{step.number}</span>
            <span className="process-title">{step.title}</span>

            <div className={`process-blurb ${activeStep === index ? "show" : ""}`}>
              {step.blurb}
            </div>
          </button>

          {index < steps.length - 1 && <div className="process-arrow">→</div>}
        </div>
      ))}
    </div>
  );
}