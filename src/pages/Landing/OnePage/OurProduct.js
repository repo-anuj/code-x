import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./OurProduct.scss";
import infinityERP from "../../../assets/images/landing/features/infinityERP.png";
import infinityFleet from "../../../assets/images/landing/features/FleetLOGO.png";
import infinityX from "../../../assets/images/landing/features/InfinityX.png";

const products = {
  "Infinity X": {
    title: "Tailored Solutions for Diverse Industries",
    description:
      "InfinityX offers comprehensive solutions for various business types, streamlining operations and enhancing efficiency.",
    features: [
      "SMEs",
      "Management Information System (MIS)",
      "Builders and Contractors",
      "Restaurant & Bar Management",
      "Theater Food Ordering",
      "Retail and Wholesale Traders",
      "FMCG",
    ],
    card: {
      team: "InfinityX Team",
      tag: "POS",
      image: infinityX, // Replace with actual image path
      cardTitle: "Smart POS System Implementation",
      cardDescription:
        "Streamline your restaurant operations with our integrated POS system. Handle orders, inventory, and customer management seamlessly.",
      tags: ["Restaurant", "POS", "Inventory", "CRM"],
    },
  },
  "Infinity Fleet": {
    title: "Efficient Fleet Management Solutions",
    description:
      "Infinity Fleet offers comprehensive tools for optimizing your vehicle fleet operations and management.",
    features: [
      "Route Optimization",
      "Vehicle Maintenance Management",
      "Driver Management",
    ],
    card: {
      team: "Fleet Team",
      tag: "Logistics",
      image: infinityFleet, // Replace with actual image path
      cardTitle: "Real-time Fleet Tracking System",
      cardDescription:
        "Monitor your entire fleet in real-time. Track vehicle locations, maintenance schedules, and driver performance all in one place.",
      tags: ["GPS", "Maintenance", "Analytics", "Fleet"],
    },
  },
  "Infinity ERP": {
    title: "Comprehensive Enterprise Resource Planning",
    description:
      "Infinity ERP provides robust solutions for various industries, ensuring seamless integration and efficient management of resources.",
    features: [
      "Steel and Allied Industries",
      "Logistics & Movement",
      "Food Court Management",
      "Property Management System",
      "School Management System",
    ],
    card: {
      team: "ERP Team",
      tag: "Enterprise",
      image: infinityERP, // Replace with actual image path
      cardTitle: "Integrated ERP Dashboard",
      cardDescription:
        "Unified platform for managing all your business operations. From inventory to finance, everything at your fingertips.",
      tags: ["Steel", "Logistics", "Education", "Property"],
    },
  },
};

const OurProduct = () => {
  const [activeTab, setActiveTab] = useState("Infinity X");
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const tabVariants = {
    inactive: {
      backgroundColor: "transparent",
      color: "#b0b0b0",
      scale: 1,
    },
    active: {
      backgroundColor: "#4a90e2",
      color: "#ffffff",
      scale: 1.05,
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="body">
      <div className="our-product" id="services" ref={sectionRef}>
        <AnimatePresence>
          {hasAnimated && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="main-title"
              >
                <samp>What Our</samp> Product Does
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="subtitle"
              >
                It should be very clear who your product is for and what problem
                it solves for them.
              </motion.p>

              <div className="tabs-container">
                {Object.keys(products).map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    variants={tabVariants}
                    animate={activeTab === tab ? "active" : "inactive"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`tab ${activeTab === tab ? "active" : ""}`}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>

              <div className="content-container">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="product-content"
                  >
                    <div className="text-content">
                      <h2>{products[activeTab].title}</h2>
                      <p>{products[activeTab].description}</p>
                      <ul className="features-list">
                        {products[activeTab].features.map((feature, index) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.button
                        className="get-started-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GET STARTED
                      </motion.button>
                    </div>
                    <div className="visual-content">
                      <motion.div
                        className="card-preview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="card-header">
                          <span className="team">
                            {products[activeTab].card.team}
                          </span>
                          <span className="tag">
                            {products[activeTab].card.tag}
                          </span>
                        </div>
                        <div className="card-user">
                          <div className="user-info">
                            <img
                              src={products[activeTab].card.image}
                              className="img-fluid"
                              alt={`${activeTab} preview`}
                            />
                          </div>
                        </div>
                        <h3>{products[activeTab].card.cardTitle}</h3>
                        <p>{products[activeTab].card.cardDescription}</p>
                        <div className="card-footer">
                          {products[activeTab].card.tags.map((tag, index) => (
                            <span key={index} className="priority">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OurProduct;
