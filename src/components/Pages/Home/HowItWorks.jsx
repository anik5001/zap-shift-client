import React from "react";
import { GrDeliver } from "react-icons/gr";
import bookingIcon from "../../../assets/bookingIcon.png";
const works = [
  {
    name: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    name: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    name: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    name: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];
const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">How it Works</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {works.map((work, index) => (
          <div
            key={index}
            className=" shadow-2xl p-7 space-y-3  rounded-2xl hover:scale-105 transition ease-in-out"
          >
            <div className="">
              {/* <GrDeliver size={40} /> */}
              <img src={bookingIcon} alt="" />
            </div>

            <h1 className="text-xl font-bold">{work.name}</h1>
            <p className="text-[#606060]">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
