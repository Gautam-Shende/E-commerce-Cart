
import React, { useState } from "react";
import Img1 from "../../assets/shirt/Mshirt.png";
import Img2 from "../../assets/shirt/Wsirt.png";
import Img4 from "../../assets/shirt/Mtsirt.png";
import Img5 from "../../assets/shirt/WTsirt.png";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductsData = [
    {
    id: 1,
    img: Img1,
    title: "Men Formal Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    amt: "$18.99",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    amt: "$20.00",
  },
  {
    id: 3,
    img: Img4,
    title: "Men T-Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    amt: "$22.99",
  },
  {
    id: 4,
    img: Img5,
    title: "Women T-Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    amt: "$19.99",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter(id => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  return (
    <div>
      <div className="h-auto w-full p-10 bg-gray-200 dark:bg-black">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id} // Added key prop
              data-aos="zoom-in"
              className="rounded-2xl bg-slate-400/50 dark:bg-gray-800 m-5 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-black shadow-2xl duration-1000 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[120px] pt-10">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] mx-auto -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <h3 className="m-1 font-bold">{data.amt}</h3>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <div className="flex justify-center gap-2 pt-2">
                  <button
                    className="bg-blue-600 dark:bg-slate-400/50 text-white px-4 py-1 rounded-full flex items-center gap-1 transition-colors text-sm"
                    onClick={handleOrderPopup}
                  >
                    <FaShoppingCart size="25" />
                  </button>
                  <button
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-white px-4 py-1 rounded-full flex items-center gap-1 transition-colors text-sm"
                    onClick={() => toggleLike(data.id)}
                  >
                    <FaHeart 
                      size="25" 
                      style={{ color: likedProducts.includes(data.id) ? "red" : "black" }} 
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;