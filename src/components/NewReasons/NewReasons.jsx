import React from "react";
import "./NewReasons.css";

const reasonsData = [
  {
    number: "01",
    title: "UI / UX Creative Design",
    text: "We craft beautiful and user-friendly interfaces that enhance user experience and engagement.",
    color: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 7-7" stroke="black" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Modern Development",
    text: "We build scalable and high-performance web applications using modern technologies.",
    color: "#ff8903",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="black" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Responsive Layout",
    text: "Fully responsive designs that look perfect on desktop, tablet, and mobile devices.",
    color: "#16a34a",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="12" stroke="black" strokeWidth="2" fill="none"/>
        <rect x="8" y="18" width="8" height="2" fill="black"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "SEO Optimized",
    text: "Optimized structure and performance to help your website rank better on search engines.",
    color: "#dc2626",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" stroke="black" strokeWidth="2" fill="none"/>
        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="black" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Fast Performance",
    text: "Clean and optimized code ensuring lightning-fast loading speeds.",
    color: "#fffb14",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2L3 14h7v8l10-12h-7z" fill="black"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "Custom Solutions",
    text: "Tailor-made website solutions crafted according to your business needs.",
    color: "#0ea5e9",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l4 7h-8l4-7zm0 20l-4-7h8l-4 7zM2 12l7-4v8l-7-4zm20 0l-7 4v-8l7 4z" fill="black"/>
      </svg>
    ),
  },
];

const NewReasons = () => {
  return (
    <section className="new-reasons">
      <h2 className="reasons-title">
        Why <span>Choose Us ?</span>
      </h2>
      <p className="reasons-subtitle">
        We serve quality and excellence in every project we undertake, ensuring your satisfaction and success.
      </p>
      <div className="new-reasons__container">
        {reasonsData.map((item, index) => (
          <div className="new-reasons__card" key={index}>
            <div className="new-reasons__circle" style={{ backgroundColor: item.color }}>
              <span>{item.number}</span>
            </div>

            <div className="new-reasons__icon">
              {item.icon}
            </div>

            <h3 className="new-reasons__title">{item.title}</h3>
            <p className="new-reasons__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReasons;