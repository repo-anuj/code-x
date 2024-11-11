// IndustriesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import BoxReveal from "./BoxReveal";
import "../../../assets/scss/pages/IndustriesSection.scss";

const industries = [
  {
    id: 1,
    title: "Steel Industry",
    subtitle: "Automate with Infinity ERP",
    description:
      "Our ERP solutions streamline processes for steel manufacturing and processing, enhancing efficiency and reducing costs. Optimize your production lines with automation that meets industry standards.",
    additionalInfo:
      "Access real-time data, control inventory, and improve quality assurance with our comprehensive ERP solutions.",
    link: "/industries/steel",
  },
  {
    id: 2,
    title: "Restaurants",
    subtitle: "Automate with Infinity ERP",
    description:
      "Transform restaurant operations with POS systems, inventory tracking, and customer management tools. Our solution is built to handle high demand and streamline kitchen-to-table services.",
    additionalInfo:
      "Achieve customer satisfaction through efficient order management and loyalty programs, integrated seamlessly into one platform.",
    link: "/industries/restaurants",
  },
  {
    id: 3,
    title: "Educational Institutions",
    subtitle: "Automate with Infinity ERP",
    description:
      "Empower educational institutions with digital solutions, such as learning management, administrative tools, and engagement platforms.",
    additionalInfo:
      "Support student success and streamline administrative workflows, making data management simpler and more secure.",
    link: "/industries/education",
  },
  {
    id: 4,
    title: "Vendor Management",
    subtitle: "Automate with Infinity ERP",
    description:
      "Enhance vendor relationships with robust procurement and management tools. Our solutions bring transparency and efficiency to your vendor network.",
    additionalInfo:
      "Gain control over supply chain logistics, manage contracts, and reduce operational costs.",
    link: "/industries/vendor-management",
  },
  {
    id: 5,
    title: "Healthcare",
    subtitle: "Automate with Infinity ERP",
    description:
      "Integrate advanced healthcare solutions like patient management, medical records, and administration systems into one streamlined interface.",
    additionalInfo:
      "Enhance patient outcomes and operational efficiency with a centralized healthcare management system.",
    link: "/industries/healthcare",
  },
  {
    id: 6,
    title: "Retail",
    subtitle: "Automate with Infinity ERP",
    description:
      "Optimize retail operations with our ERP solutions, from inventory tracking to sales analytics, ensuring seamless customer experiences.",
    additionalInfo:
      "Gain insights with real-time sales data, customer loyalty tracking, and efficient inventory management.",
    link: "/industries/retail",
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
            <button className="learn-more">Learn More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
