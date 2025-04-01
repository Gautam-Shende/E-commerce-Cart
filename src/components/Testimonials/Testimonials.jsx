
import React from "react";
import Slider from "react-slick";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FcRating } from "react-icons/fc";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
    rating: 5,
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Jhon Adam",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    rating: 4,
  },
  {
    id: 4,
    name: "Thomas Little",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IoIosStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoIosStarHalf key={i} className="text-yellow-400" />);
      } else {
        stars.push(<IoIosStarOutline key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="text-sm text-primary font-semibold mb-2 dark:text-primary-400"
          >
            What Our Customers Are Saying
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Customer Response's
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto text-sm"
          >
            Hear from our satisfied customers about their experiences with our
            products and services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  {/* Quote Icons */}
                  <FcRating className="text-gray-400 dark:text-gray-500 text-2xl mb-4" />
                  {/* Testimonial Text */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    {data.text}
                  </p>
                  {/* Testimonial Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {data.name}
                      </h3>
                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {renderStars(data.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;