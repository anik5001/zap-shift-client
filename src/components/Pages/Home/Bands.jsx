import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstand from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";
const Bands = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={amazon} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={amazon_vector} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={casio} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={moonstar} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={star} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={start_people} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={randstand} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Bands;
