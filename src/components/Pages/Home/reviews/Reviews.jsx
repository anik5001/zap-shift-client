import React, { use } from "react";
import customerTop from "../../../../assets/customer-top.png";
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div>
      <img className="mx-auto mb-10" src={customerTop} alt="" />
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">What our customers are sayings</h1>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, <br /> pain, and strengthen your body
          with ease!
        </p>
      </div>
    </div>
  );
};

export default Reviews;
