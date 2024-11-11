import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./OurProduct.scss";
import infinityERP from "../../../assets/images/landing/features/infinityERP.png";

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
  },
};

const OurProduct = () => {
  const [activeTab, setActiveTab] = useState("Infinity X");
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const tabVariants = {
    inactive: {
      backgroundColor: "#fff",
      color: "#000",
      scale: 1,
    },
    active: {
      backgroundColor: "#4b38b3",
      color: "#fff",
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
                    <div className="card-preview">
                      <div className="card-header">
                        <span className="team">SEO Team</span>
                        <span className="tag">Bugs</span>
                      </div>
                      <div className="card-user">
                        <div className="user-info">
                          <img
                            src={infinityERP}
                            className="img-fluid"
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <h3>Bot crawlers causing latency issues</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed incidunt iste molestiae distinctio assumenda quos
                        consectetur.
                      </p>
                      <div className="card-footer">
                        <span className="priority">Steel</span>
                        <span className="priority">Theater</span>
                        <span className="priority">Automobile</span>
                        <span className="priority">Medium</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurProduct;
