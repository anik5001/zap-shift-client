import React from "react";
import { Quote } from "lucide-react";

const ReviewsCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="max-w-sm bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ">
      {/* Quote Icon */}
      <div className="text-teal-400">
        <Quote size={32} />
      </div>

      {/* Message */}
      <p className="text-gray-600 mt-3 leading-relaxed">{testimonial}</p>

      {/* Divider with dot */}
      <div className="relative my-4">
        <hr className="border-dashed border-gray-300" />
        <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white"></span>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 ">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
