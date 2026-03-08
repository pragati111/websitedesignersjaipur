import React from 'react';
import './ProcessSteps.css';

const steps = [
  {
    id: '01',
    title: 'Understanding Your Vision',
    description: 'We gather all the essential details about your business, goals, target audience, and required features to ensure the website reflects your brand perfectly.',
    color: '#818cf8',
    icon: '💡' // You can replace these with Lucide-react or FontAwesome icons
  },
  {
    id: '02',
    title: 'Strategic Planning & Wireframing',
    description: 'We create a clear structure, layout flow, and content strategy. This ensures your website is not just beautiful, but also user-friendly and conversion-focused.',
    color: '#4ade80',
    icon: '📐'
  },
  {
    id: '03',
    title: 'Designing & Building Website',
    description: 'We design a modern, responsive interface and develop your website using clean, scalable code to ensure speed, performance, and long-term reliability.',
    color: '#fbbf24',
    icon: '💻'
  },
  {
    id: '04',
    title: 'Approval, Testing, & Launch',
    description: 'Before going live, we take your approval, test across devices and browsers, and optimize performance to ensure everything runs flawlessly before launch.',
    color: '#f87171',
    icon: '🚀'
  }
];

const ProcessSteps = () => {
  return (
    <section className="process-section">
      <div className="process-header">
        <h2>Our Proven <span className="highlight">4-Step Process</span></h2>
        <p>A strategic process that ensures your website is not just beautiful — but purposeful, optimized, and built to grow your business.</p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div key={step.id} className="process-card">
            <div className="card-top-accent" style={{ backgroundColor: step.color }}></div>
            <div className="icon-wrapper" style={{ color: step.color }}>
              {step.icon}
            </div>
            <h3>Step {step.id}: {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      {/* Optional Progress Line at the bottom */}
      <div className="progress-line-container">
        {steps.map((step) => (
          <div key={step.id} className="progress-node" style={{ backgroundColor: step.color }}>
            {step.id.replace('0', '')}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;