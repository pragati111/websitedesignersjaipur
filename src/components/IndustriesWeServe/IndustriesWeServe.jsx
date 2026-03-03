import React from "react";
import "./IndustriesWeServe.css";

const reasons = [
  {
    id: 1,
    title: "Core Website Types (Primary Categories)",
    desc: `• Business / Corporate Websites
• Ecommerce Stores
• Portfolio Websites
• Personal Branding Websites
• Landing Pages
• Booking & Appointment Websites
• Membership Websites
• Directory / Listing Websites
• Marketplace Websites
• Blog / News Websites`,
    bgColor: "#F6EFC8",
    pinColor: "#F4C430",
    icon: "bolt",
  },
  {
    id: 2,
    title: "Professional Services",
    desc: `• Lawyers & Law Firms
• Chartered Accountants
• Financial Consultants
• Insurance Agents
• Real Estate Agents
• Architects
• Interior Designers
• Doctors & Clinics
• Dentists
• Therapists / Counselors
• Astrologers
• Event Planners
• Wedding Planners
• Photographers & Videographers`,
    bgColor: "#E6DDF7",
    pinColor: "#7A4DFF",
    icon: "settings",
  },
  {
    id: 3,
    title: "Retail & Local Businesses",
    desc: `• Jewellery Shops
• Clothing Stores
• Boutiques
• Grocery Stores
• Namkeen / Snacks Brands
• Bakeries
• Sweet Shops
• Dairy Businesses
• Hardware Shops
• Mobile Shops
• Furniture Stores
• Dry Cleaners
• Salons & Spas
• Restaurants & Cafes`,
    bgColor: "#F8D7E9",
    pinColor: "#FF3CAC",
    icon: "chart",
  },
  {
    id: 4,
    title: "Industrial & Manufacturing",
    desc: `• Paint Manufacturers
• Tools Manufacturers
• Machine Sellers
• Spare Parts Dealers
• Steel & Metal Industries
• Chemical Manufacturers
• Packaging Companies
• Printing & Offset Press
• Textile Manufacturers
• Construction Companies`,
    bgColor: "#DCEAF7",
    pinColor: "#2F80ED",
    icon: "trending",
  },
  {
    id: 5,
    title: "Education & Training",
    desc: `• Schools
• Colleges
• Coaching Institutes
• Tuition Classes
• Online Course Creators
• Skill Development Centers
• Computer Institutes
• Music & Dance Academies`,
    bgColor: "#D9F5DC",
    pinColor: "#22C55E",
    icon: "gear",
  },
  {
    id: 6,
    title: "Health & Wellness",
    desc: `• Hospitals
• Clinics
• Diagnostic Centers
• Yoga Studios
• Fitness Trainers
• Nutritionists
• Ayurvedic Centers
• Medical Stores`,
    bgColor: "#FBE1D9",
    pinColor: "#F97316",
    icon: "truck",
  },
  {
    id: 7,
    title: "Technology, Travel & Organizations",
    desc: `• IT Companies
• SaaS Startups
• App Development Companies
• Digital Agencies
• Hotels & Resorts
• Travel Agencies
• NGOs & Trusts
• Religious Organizations
• Community Groups`,
    bgColor: "#E8F0FF",
    pinColor: "#6366F1",
    icon: "shield",
  },
];

const Reasons = () => {
  const renderIcon = (type, color) => {
    const commonProps = {
      width: 24,
      height: 24,
      fill: "none",
      stroke: color,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    switch (type) {
      case "bolt":
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
          </svg>
        );

      case "settings":
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        );

      case "chart":
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <line x1="4" y1="20" x2="4" y2="10" />
            <line x1="10" y1="20" x2="10" y2="4" />
            <line x1="16" y1="20" x2="16" y2="14" />
            <line x1="22" y1="20" x2="22" y2="8" />
          </svg>
        );

      case "trending":
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.5" y2="15.5" />
            <line x1="20" y1="20" x2="8.5" y2="8.5" />
          </svg>
        );

      case "gear":
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a7.9 7.9 0 000-6M4.6 9a7.9 7.9 0 000 6" />
          </svg>
        );

      case "truck":
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        );

      case "shield":
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6z" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section className="reasons-section">
      <h2 className="reasons-title">
        Industries <span>We Serve</span>
      </h2>
      <p className="reasons-subtitle">
        We create powerful websites across multiple industries and business types.
      </p>

      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={reason.id} className={`reason-card card-${index}`}>
            <div className="white-card">
              <div
                className="pin"
                style={{ backgroundColor: reason.pinColor }}
              ></div>

              <div
                className="colored-card"
                style={{ backgroundColor: reason.bgColor }}
              >
                <div className="icon">
                  {renderIcon(reason.icon, reason.pinColor)}
                </div>

                <h3>{reason.title}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{reason.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;