
import React from "react";
import Img1 from "../../assets/women/women3.jpg";
import Img2 from "../../assets/women/Menstyle.png";
import Img3 from "../../assets/women/boy.jpeg";
import Img4 from "../../assets/women/womenpant.jpeg";
import Img5 from "../../assets/women/menpants.jpeg";
import Img6 from "../../assets/women/men&women.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    amt: "$10.00",
  },
  {
    id: 2,
    img: Img2,
    title: "Men's Styles",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
    amt: "$13.00",
  },
  {
    id: 3,
    img: Img3,
    title: "Children's Wear",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    amt: "$9.00",
  },
  {
    id: 4,
    img: Img4,
    title: "Women's Jeans",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    amt: "$7.99",
  },
  {
    id: 5,
    img: Img5,
    title: "Men's Pants",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
    amt: "$10.00",
  },
  {
    id: 6,
    img: Img6,
    title: "Unisex Jeans",
    rating: 4.5,
    color: "Pink",
    aosDelay: "1000",
    amt: "$12.99",
  },
];

const Products = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="text-sm text-primary font-semibold mb-2 dark:text-primary-400"
          >
            Top Selling Products for You
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Explore Our Collection
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto text-sm"
          >
            Discover the latest trends in fashion. From ethnic wear to casual
            styles, we have something for everyone.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative p-4">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-48  transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Color: {data.color}
                  </p>
                  <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-medium ml-1 dark:text-gray-300">
                      {data.rating}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-primary font-bold dark:text-primary-400">
                      {data.amt}
                    </span>
                    <button className="text-sm bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/90 transition dark:bg-primary-500 dark:hover:bg-primary-600">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition flex items-center gap-2 dark:bg-primary-500 dark:hover:bg-primary-600">
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;