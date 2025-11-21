import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import OurServices from "./OurServices";
import Bands from "./Bands";
import AboutUs from "./AboutUs";
import CustomerSatisfication from "./CustomerSatisfication";
import Reviews from "./reviews/Reviews";
const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div className=" space-y-20">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <div className=" max-w-5xl mx-auto ">
        <h1 className="  text-center text-2xl font-bold mb-10">
          We've helped thousands of sales teams
        </h1>
        <Bands></Bands>
        <div className="mt-20 max-w-5xl mx-auto border-b border-dashed "></div>
      </div>
      <AboutUs></AboutUs>
      <div className="mt-20 max-w-5xl mx-auto border-b border-dashed "></div>

      <CustomerSatisfication></CustomerSatisfication>

      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
