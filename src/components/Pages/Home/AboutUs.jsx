import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="flex shadow-2xl rounded-2xl">
        <div className=" p-5">
          <img src={liveTracking} alt="" />
        </div>
        <div className="border-r border-dashed h-30  my-auto"></div>

        <div className="p-8  space-y-2">
          <h1 className="text-2xl font-bold">Live Parcel Tracking</h1>
          <p className="">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex shadow-2xl rounded-2xl">
        <div className=" p-5">
          <img src={liveTracking} alt="" />
        </div>
        <div className="border-r border-dashed h-30  my-auto"></div>

        <div className="p-8  space-y-2">
          <h1 className="text-2xl font-bold">Live Parcel Tracking</h1>
          <p className="">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex shadow-2xl rounded-2xl">
        <div className=" p-5">
          <img src={liveTracking} alt="" />
        </div>
        <div className="border-r border-dashed h-30  my-auto"></div>

        <div className="p-8  space-y-2">
          <h1 className="text-2xl font-bold">Live Parcel Tracking</h1>
          <p className="">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
