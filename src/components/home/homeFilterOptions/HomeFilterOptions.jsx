import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import titleCase from "../../../services/titleCase";
const HomeFilterOptions = ({ filterRestaurants }) => {
  const [selectedOption, setSelectedOption] = useState("ALL");
  const filterOptions = [
    {
      value: "ALL",
    },
    {
      value: "FAST FOOD",
      path: "../images/fast-food.png",
    },
    {
      value: "HEALTHY",
      path: "../images/healthy.png",
    },
    {
      value: "BURGUER",
      path: "../images/burguer.png",
    },
    {
      value: "PIZZA",
      path: "../images/pizza.png",
    },
    {
      value: "CHICKEN",
      path: "../images/chicken.png",
    },
  ];



  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1300: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {filterOptions.map((option, index) => {
        return (
          <SwiperSlide
            key={index}
            onClick={() => setSelectedOption(option.value)}
          >
            <section
              className={`home__filter-option ${
                option.value == selectedOption
                  ? "home__filter-option--selected"
                  : ""
              }`}
              onClick={() => filterRestaurants(option.value)}
            >
              {option?.path && (
                <img
                  src={option.path}
                  alt={`${option.value} image`}
                  className="home__filter-option--icon"
                />
              )}
              <p className="home__filter-option--text">
                {titleCase(option.value)}
              </p>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeFilterOptions;
