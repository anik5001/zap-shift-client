import React from "react";
import serviceImg from "../../../assets/service.png";
const services = [
  {
    name: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery is available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
  {
    name: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
  },
  {
    name: "Fulfillment Solution",
    description:
      "We also offer customized services with inventory management support, online order processing, packaging, and after-sales support.",
  },
  {
    name: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    name: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services that include warehouse and inventory management support.",
  },
  {
    name: "Parcel Return",
    description:
      "Through our reverse logistics facility, we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <>
      <div className="bg-secondary rounded-xl text-white p-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-3">Our Services</h1>
          <p>
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to <br /> business shipments -
            we deliver on time, every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-2xl bg-white text-black text-center p-4 rounded-2xl space-y-4 hover:scale-105 transition ease-in-out"
            >
              <img src={serviceImg} alt="" className="mx-auto" />
              <h1 className="text-2xl font-bold">{service.name}</h1>
              <p className="text-[#606060]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
