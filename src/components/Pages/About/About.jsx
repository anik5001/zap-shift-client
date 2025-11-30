import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-white shadow-2xl p-20">
      <h1 className="text-4xl font-bold mb-2">About Us</h1>
      <p className="mb-30">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal <br /> packages to business shipments — we deliver
        on time, every time.
      </p>
      <div className="text-2xl flex gap-3 text-gray-500 mb-5">
        <Link>Story</Link>
        <Link>Mission</Link>
        <Link>Success</Link>
        <Link>Team & Others</Link>
      </div>
      <div className="space-y-5">
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
      </div>
    </div>
  );
};

export default About;
