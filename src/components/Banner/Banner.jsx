import React from "react";
import BannerImg from "../../assets/website/Summer.jpg";
import { FiShield, FiGift } from "react-icons/fi";
import { IoCardOutline } from "react-icons/io5";
import { GiDeliveryDrone } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 py-4 px-4 sm:px-6 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
          {/* Image Section - Responsive Width */}
          <div 
            data-aos="fade-up"
            className="w-full lg:w-1/2 max-w-[600px] mx-auto group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity rounded-3xl" />
            <img
              src={BannerImg}
              alt="Summer Sale"
              className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover transform transition-transform hover:scale-[1.02]"
              style={{ maxHeight: "70vh" }}
            />
          </div>

          {/* Text Content - Responsive Width */}
          <div 
            data-aos="fade-down"
            className="w-full lg:w-1/2 max-w-[600px] mx-auto space-y-3 sm:space-y-4 md:space-y-5 text-center lg:text-left px-2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Summer Sale
              <span className="block text-xl sm:text-2xl md:text-3xl mt-1">
                Up to 50% Off
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover amazing deals on premium products. Limited time offer - upgrade your wardrobe 
              with our curated summer collection while stocks last!
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="feature-card p-2 sm:p-3 md:p-4 rounded-lg bg-white dark:bg-slate-800 hover:shadow-md transition-all">
                <FiShield className="w-6 h-6 sm:w-8 sm:h-8 p-1 mb-1 text-purple-600 bg-purple-50 dark:bg-purple-900/30 rounded-full mx-auto lg:mx-0" />
                <h3 className="text-xs sm:text-sm font-medium">Premium Quality</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  Certified materials
                </p>
              </div>

              <div className="feature-card p-2 sm:p-3 md:p-4 rounded-lg bg-white dark:bg-slate-800 hover:shadow-md transition-all">
                <GiDeliveryDrone className="w-6 h-6 sm:w-8 sm:h-8 p-1 mb-1 text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full mx-auto lg:mx-0" />
                <h3 className="text-xs sm:text-sm font-medium">Fast Delivery</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  Next-day shipping
                </p>
              </div>

              <div className="feature-card p-2 sm:p-3 md:p-4 rounded-lg bg-white dark:bg-slate-800 hover:shadow-md transition-all">
                <IoCardOutline className="w-6 h-6 sm:w-8 sm:h-8 p-1 mb-1 text-green-500 bg-green-50 dark:bg-green-900/30 rounded-full mx-auto lg:mx-0" />
                <h3 className="text-xs sm:text-sm font-medium">Secure Payment</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  256-bit SSL
                </p>
              </div>

              <div className="feature-card p-2 sm:p-3 md:p-4 rounded-lg bg-white dark:bg-slate-800 hover:shadow-md transition-all">
                <FiGift className="w-6 h-6 sm:w-8 sm:h-8 p-1 mb-1 text-pink-500 bg-pink-50 dark:bg-pink-900/30 rounded-full mx-auto lg:mx-0" />
                <h3 className="text-xs sm:text-sm font-medium">Special Offers</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  Member deals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;