import React, { useState, useEffect } from "react";
import "./NewHero.css";
import bg1 from "../../assets/01.png"
import bg2 from "../../assets/02.png"
import bg3 from "../../assets/03.png"
import bg4 from "../../assets/04.png"
import bg5 from "../../assets/05.png"

const data = [
  {
    title: "Beautiful Websites That Convert",
    text: "We design and develop stunning, high-performance websites that attract customers and turn visitors into real business.",
    image: bg1,
  },
  {
    title: "Premium Looking Websites at Affordable Cost",
    text: "Get a modern, responsive and professional website without spending a fortune. Quality design that fits your budget.",
    image: bg2,
  },
  {
    title: "Websites for Every Industry",
    text: "From doctors, schools and lawyers to ecommerce, manufacturers and startups — we create tailored websites for every field.",
    image: bg3,
  },
  {
    title: "Fast, SEO-Friendly & Mobile Ready",
    text: "Optimized for speed, search engines and all devices so your business performs perfectly everywhere.",
    image: bg4,
  },
  {
    title: "Launch Your Digital Presence",
    text: "Build your online identity with confidence and grow your brand with a website that truly represents you.",
    image: bg5,
  },
];

export default function NewHero() {
  const [active, setActive] = useState(0);

  // ✅ auto switch
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 3000); // change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-glass">
      <div key={active} className="hero-left">
        <h1 className="hero-title">{data[active].title}</h1>
        <p className="hero-text">{data[active].text}</p>

        <div className="hero-buttons">
          {data.map((_, i) => (
            <button
              key={i}
              className={`circle-btn ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div key={active + "-img"} className="hero-right">
        <img
          src={data[active].image}
          alt="hero visual"
          className="hero-image"
        />
      </div>
      </div>
    </section>
  );
}