import React from "react";
import { CardBody, Col, Row } from "reactstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CPDashboardDataTile from "../../../Components/CPComponents/CPDashboard/CPDashboardDataTile";
import CPDashboardSummaryCard from "../../../Components/CPComponents/CPDashboard/CPDashboardSummaryCard";

const WeightBridgeStatus = () => {
  const data = [
    {
      key: 1,
      item: {
        voucherType: "Sales Voucher",
        argumentValue: [
          { argument: "Total Sales", value: "1540.75" },
          { argument: "Total Items", value: "320" },
          { argument: "Net Profit", value: "560.50" },
          { argument: "Discount", value: "45.00" },
        ],
      },
    },
    {
      key: 2,
      item: {
        voucherType: "Purchase Voucher",
        argumentValue: [
          { argument: "Total Purchases", value: "2400.00" },
          { argument: "Total Items", value: "450" },
          { argument: "Net Cost", value: "2100.75" },
          { argument: "Discount", value: "120.00" },
        ],
      },
    },
    {
      key: 4,
      item: {
        voucherType: "Return Voucher",
        argumentValue: [
          { argument: "Total Returns", value: "750.30" },
          { argument: "Total Items", value: "150" },
          { argument: "Net Loss", value: "200.00" },
          { argument: "Restocking Fee", value: "15.00" },
        ],
      },
    },
    {
      key: 5,
      item: {
        voucherType: "Return Voucher",
        argumentValue: [
          { argument: "Total Returns", value: "750.30" },
          { argument: "Total Items", value: "150" },
          { argument: "Net Loss", value: "200.00" },
          { argument: "Restocking Fee", value: "15.00" },
        ],
      },
    },
    {
      key: 6,
      item: {
        voucherType: "Return Voucher",
        argumentValue: [
          { argument: "Total Returns", value: "750.30" },
          { argument: "Total Items", value: "150" },
          { argument: "Net Loss", value: "200.00" },
          { argument: "Restocking Fee", value: "15.00" },
        ],
      },
    },
  ];

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
          {data.map((individualData) => (
            <SwiperSlide key={individualData.key}>
              <CPDashboardDataTile individualData={individualData} />
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
          {data.map((individualData) => (
            <SwiperSlide key={individualData.key}>
              <CPDashboardSummaryCard />
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
          {data.map((individualData) => (
            <SwiperSlide key={individualData.key}>
              <CPDashboardSummaryCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </React.Fragment>
  );
};

export default WeightBridgeStatus;
