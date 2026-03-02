import React, { useState, useEffect } from "react";
import "./NewHero.css";

const data = [
  {
    title: "Hands-On Learning",
    text: "Learn by building real projects with practical guidance and modern tools.",
    image: "https://picsum.photos/600/500?random=1",
  },
  {
    title: "Creative Design",
    text: "Explore beautiful UI concepts and improve your visual design skills.",
    image: "https://picsum.photos/600/500?random=2",
  },
  {
    title: "Smart Development",
    text: "Write scalable and clean code using the latest technologies.",
    image: "https://picsum.photos/600/500?random=3",
  },
  {
    title: "Fast Performance",
    text: "Optimize websites for speed, SEO and great user experience.",
    image: "https://picsum.photos/600/500?random=4",
  },
  {
    title: "Launch & Grow",
    text: "Deploy your product and grow your digital presence confidently.",
    image: "https://picsum.photos/600/500?random=5",
  },
];

export default function NewHero() {
  const [active, setActive] = useState(0);

  // ✅ auto switch
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 2000); // change every 4s

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