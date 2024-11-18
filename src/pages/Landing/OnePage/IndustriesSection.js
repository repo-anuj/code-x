import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BoxReveal from "./BoxReveal";
import "../../../assets/scss/pages/IndustriesSection.scss";
import Services from "./Services_all";

const industries = [
  {
    id: 1,
    title: "Steel Industry",
    subtitle: "Automate with Infinity ERP",
    description:
      "Our ERP solutions streamline processes for steel manufacturing and processing, enhancing efficiency and reducing costs. Optimize your production lines with automation that meets industry standards.",
    additionalInfo:
      "Access real-time data, control inventory, and improve quality assurance with our comprehensive ERP solutions.",
    link: "/Services_all",
  },
  {
    id: 2,
    title: "Restaurants",
    subtitle: "Automate with Infinity ERP",
    description:
      "Transform restaurant operations with POS systems, inventory tracking, and customer management tools. Our solution is built to handle high demand and streamline kitchen-to-table services.",
    additionalInfo:
      "Achieve customer satisfaction through efficient order management and loyalty programs, integrated seamlessly into one platform.",
    link: "/Services_all",
  },
  {
    id: 3,
    title: "Educational Institutions",
    subtitle: "Automate with Infinity ERP",
    description:
      "Empower educational institutions with digital solutions, such as learning management, administrative tools, and engagement platforms.",
    additionalInfo:
      "Support student success and streamline administrative workflows, making data management simpler and more secure.",
    link: "/Services_all",
  },
  {
    id: 4,
    title: "Supplier Management",
    subtitle: "Streamline with Infinity ERP",
    description:
      "Build stronger supplier relationships with easy-to-use procurement and management tools. Our solutions improve transparency and efficiency across your supply chain.",
    additionalInfo:
      "Take control of logistics, manage contracts more effectively, and lower operational costs.",
    link: "/Services_all",
  },
  {
    id: 5,
    title: "Hospital Management",
    subtitle: "Simplify with Infinity ERP",
    description:
      "Combine key healthcare functions like patient care, medical records, and administration into one easy-to-use system.",
    additionalInfo:
      "Improve patient care and boost efficiency with a unified healthcare management platform.",
    link: "/Services_all",
  },
  {
    id: 6,
    title: "Retail",
    subtitle: "Automate with Infinity ERP",
    description:
      "Optimize retail operations with our ERP solutions, from inventory tracking to sales analytics, ensuring seamless customer experiences.",
    additionalInfo:
      "Gain insights with real-time sales data, customer loyalty tracking, and efficient inventory management.",
    link: "/Services_all",
  },
  {
    id: 7,
    title: "Mall & Theater Management",
    subtitle: "Streamline Operations with Infinity ERP",
    description:
      "Easily manage mall and theater operations, from tenant leasing to ticket sales and customer services, all in one platform.",
    additionalInfo:
      "Improve customer experience, optimize space usage, and boost revenue with a unified management solution.",
    link: "/Services_all",
  },
  {
    id: 8,
    title: "Solvent Extraction Plant Management",
    subtitle: "Optimize with Infinity ERP",
    description:
      "Streamline the operations of your solvent extraction plant, from raw material handling to extraction processes and quality control, all in one system.",
    additionalInfo:
      "Enhance production efficiency, maintain high-quality standards, and reduce operational costs with an integrated plant management solution.",
    link: "/Services_all",
  },
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="section-header">
        <h2>
          Industries <span className="dot">We Serve.</span>
        </h2>
        <p className="subtitle">Automate with Infinity ERP</p>
        <div className="purple-line" />
      </div>

      <div className="industries-content">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="industry-card"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2 * index } },
            }}
          >
            <BoxReveal boxColor="#5046e6">
              <h3>{industry.title}</h3>
            </BoxReveal>
            <p className="description">
              ➔{" "}
              {industry.description.replace(
                "Infinity ERP",
                <span className="highlight">Infinity ERP</span>
              )}
            </p>
            {/* Use Link component to navigate to the industry-specific page */}
            <Link to={industry.link}>
              <button className="learn-more">Learn More</button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
