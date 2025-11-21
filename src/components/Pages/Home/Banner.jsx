import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className=" relative">
        <img src={bannerImg1} />
        <div className="  absolute top-115 left-20">
          <button className="bg-secondary text-white btn mr-2">
            Track Your Parcel
          </button>
          <button className="btn">Be A Rider</button>
        </div>
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
