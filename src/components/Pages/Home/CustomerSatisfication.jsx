import React from "react";
import locationMerchant from "../../../assets/location-merchant.png";
import merchantBg from "../../../assets/be-a-merchant-bg.png";
const CustomerSatisfication = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto bg-secondary text-white  rounded-2xl ">
        <img src={merchantBg} alt="" />
        <div className=" mx-auto bg-secondary text-white pb-15 px-15 rounded-2xl flex gap-4 items-center">
          <div className=" space-y-3 ">
            <h1 className="text-4xl font-bold">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p>
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div>
              <button className="btn bg-[#CAEB66] text-black">
                Become a Merchant
              </button>
              <button className="btn text-[#CAEB66] ml-3">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
          <div className="">
            <img src={locationMerchant} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSatisfication;
