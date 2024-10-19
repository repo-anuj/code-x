import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import imgpattern from "../../../assets/images/landing/img-pattern.png";
import defaultDemo from "../../../assets/images/demos/default.jpg";
import saasDemo from "../../../assets/images/demos/sass.jpg";
import materialDemo from "../../../assets/images/demos/material.jpg";
import minimalDemo from "../../../assets/images/demos/minimal.jpg";
import modernDemo from "../../../assets/images/demos/modern.jpg";

const Home = () => {
  const headingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const heading = headingRef.current;
    if (heading) {
      const words = heading.innerText.split(" ");
      heading.innerHTML = words
        .map(
          (word, index) =>
            `<span class="word" style="animation-delay: ${
              index * 0.2
            }s">${word}</span>`
        )
        .join(" ");
    }
  }, []);

  const scrollToPlans = (e) => {
    e.preventDefault();
    navigate("/landing");
    setTimeout(() => {
      const plansSection = document.getElementById("plans");
      if (plansSection) {
        plansSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <React.Fragment>
      <style>
        {`
          @keyframes pullUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .word {
            display: inline-block;
            animation: pullUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation-play-state: running;
          }
        `}
      </style>
      <section className="section pb-0 hero-section" id="hero">
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} sm={10}>
              <div className="text-center mt-lg-5 pt-5">
                <h1
                  className="display-6 fw-semibold mb-3 lh-base"
                  ref={headingRef}
                >
                  Empower your business with innovative ERP from{" "}
                  <span style={{ color: "#4b38b3" }}>CodePlayers</span>
                </h1>
                <p className="lead text-muted lh-base">
                  Choose a powerful <span className="highlight">ERP</span> for
                  your <span className="highlight">Enterprise</span>
                </p>

                <div className="d-flex gap-2 justify-content-center mt-4">
                  <Link to="/register" className="btn btn-primary">
                    Request a demo{" "}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Link>
                  <a
                    href="#plans"
                    onClick={scrollToPlans}
                    className="btn btn-danger"
                  >
                    View Plans <i className="ri-eye-line align-middle ms-1"></i>
                  </a>
                </div>
              </div>

              <div className="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
                <div className="demo-img-patten-top d-none d-sm-block">
                  <img
                    src={imgpattern}
                    className="d-block img-fluid"
                    alt="..."
                    style={{ width: "100px" }}
                  />
                </div>
                <div className="demo-img-patten-bottom d-none d-sm-block">
                  <img
                    src={imgpattern}
                    className="d-block img-fluid"
                    alt="..."
                    style={{ width: "100px" }}
                  />
                </div>
                <div
  className="mx-auto -mt-12 h-[14rem] w-full max-w-7xl rounded-2xl border-[8px] border-black shadow-xl sm:shadow-[0_0_#0000004d,_0_9px_20px_#0000004a,_0_37px_37px_#00000042,_0_84px_50px_#00000026,_0_149px_60px_#0000000a,_0_233px_65px_#00000003] md:h-[48rem] md:rounded-[30px] md:p-6"
  style={{
    borderColor: '#6C6C6C', // Black outer border
    borderWidth: '8px', // Adjust thickness
    borderRadius: '20px', // Round corners to match iPad effect
    boxShadow: 'rgba(0, 0, 0, 0.29) 0px 9px 20px, rgba(0, 0, 0, 0.26) 0px 37px 37px, rgba(0, 0, 0, 0.15) 0px 84px 50px',
    padding: '6px', // Add padding between the black and gray borders
    background: '#000' // Gray inner border background
  }}
>
  <div
    className="h-full w-full overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl md:p-4"
    style={{
      border: '4px solid #6C6C6C', // Gray inner border
      borderRadius: '16px' // Round corners inside the gray border
    }}
  >
    <div className="h-full w-full overflow-hidden rounded-xl">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper h-full"
                      >
                        <SwiperSlide className="h-full">
                          <img
                            src={defaultDemo}
                            className="d-block w-100 h-full object-cover"
                            alt="..."
                          />
                        </SwiperSlide>
                        <SwiperSlide className="h-full">
                          <img
                            src={saasDemo}
                            className="d-block w-100 h-full object-cover"
                            alt="..."
                          />
                        </SwiperSlide>
                        <SwiperSlide className="h-full">
                          <img
                            src={materialDemo}
                            className="d-block w-100 h-full object-cover"
                            alt="..."
                          />
                        </SwiperSlide>
                        <SwiperSlide className="h-full">
                          <img
                            src={minimalDemo}
                            className="d-block w-100 h-full object-cover"
                            alt="..."
                          />
                        </SwiperSlide>
                        <SwiperSlide className="h-full">
                          <img
                            src={modernDemo}
                            className="d-block w-100 h-full object-cover"
                            alt="..."
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1440 120"
          >
            <g mask='url("#SvgjsMask1003")' fill="none">
              <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"></path>
            </g>
          </svg>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
