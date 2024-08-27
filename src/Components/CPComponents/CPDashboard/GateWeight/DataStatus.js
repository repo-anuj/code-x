import React from "react";
import { CardBody, Col, Row } from "reactstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CPDashboardDataTile from "../CPDashboardDataTile";
import CPDashboardSummaryCard from "../CPDashboardSummaryCard";
  
const DataStatus = ({
  dataStatus,
  itemSummary,
  accountSummary,
  showRegister,
}) => {
  if (itemSummary === null) return "";
  return (
    <React.Fragment>
      <Row>
        <div className="d-flex pt-2 pb-4">
          <h5
            className="card-title fs-18 mb-1"
            style={{ paddingLeft: "40px", paddingTop: "5px" }}
          >
            Weigh Bridge Status
          </h5>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          loop={true}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper marketplace-swiper rounded gallery-light"
        >
          {dataStatus.map((individualData, index) => (
            <SwiperSlide key={index}>
              <CPDashboardDataTile
                individualData={individualData}
                onCardClick={showRegister}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>

      <Row>
        <div className="d-flex pt-2 pb-4">
          <h5
            className="card-title fs-18 mb-1"
            style={{ paddingLeft: "40px", paddingTop: "5px" }}
          >
            Item wise Summary
          </h5>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          loop={true}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper marketplace-swiper rounded gallery-light"
        >
          {(itemSummary === null) | (itemSummary === undefined)
            ? ""
            : itemSummary.map((individualData, index) => (
                <SwiperSlide key={index}>
                  <CPDashboardSummaryCard
                    data={individualData}
                    cardType={"item.particulars"}
                    onCardClick={showRegister}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </Row>
      <Row>
        <div className="d-flex pt-2 pb-4">
          <h5
            className="card-title fs-18 mb-1"
            style={{ paddingLeft: "40px", paddingTop: "5px" }}
          >
            Account wise Summary
          </h5>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          loop={true}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper marketplace-swiper rounded gallery-light"
        >
          {(accountSummary === null) | (accountSummary === undefined)
            ? ""
            : accountSummary.map((individualData, index) => (
                <SwiperSlide key={index}>
                  <CPDashboardSummaryCard
                    data={individualData}
                    cardType={"account"}
                    onCardClick={showRegister}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </Row>
    </React.Fragment>
  );
};

export default DataStatus;
