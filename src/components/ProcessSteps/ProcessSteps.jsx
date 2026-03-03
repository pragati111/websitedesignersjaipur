import React from "react";
import "./ProcessSteps.css";

const steps = [
  {
    title: "Understanding Your Vision",
    number: "Step 01",
    color: "blue",
    text: "We gather all the essential details about your business, goals, target audience, design preferences, and required features to ensure the website reflects your brand perfectly."
  },
  {
    title: "Strategic Planning & Wireframing",
    number: "Step 02",
    color: "red",
    text: "We create a clear structure, layout flow, and content strategy. This ensures your website is not just beautiful, but also user-friendly and conversion-focused."
  },
  {
    title: "Designing & Building Your Website",
    number: "Step 03",
    color: "yellow",
    text: "We design a modern, responsive interface and develop your website using clean, scalable code to ensure speed, performance, and long-term reliability."
  },
  {
    title: "Your Approval, Testing, Optimization & Launch",
    number: "Step 04",
    color: "dark",
    text: "Before going live, we take your approval first with the content and design of the website and finally test your website across devices and browsers, optimize performance, and ensure everything runs flawlessly before launch."
  }
];

const ProcessSteps = () => {
  return (
    <section className="process-section">
        <h2 className="reasons-title">
        Our Proven  <span>4-Step Framework</span>
        </h2>
        <p className="reasons-subtitle">
            A strategic process that ensures your website is not just beautiful — but purposeful, optimized, and built to grow your business.
        </p>
      <div className="process-container">
        {steps.map((step, index) => (
          <div className={`process-card ${step.color}`} key={index}>
            
            <div className="ribbon">
              {step.title}
            </div>

            <div className="card-content">
                <p className="card-description">{step.text}</p>
            </div>

            <div className="step-number">
              {step.number}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;