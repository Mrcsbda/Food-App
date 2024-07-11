import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "./home.scss";
const Home = () => {
  const selectedOption = "ALL";
  const carrouselImages = [
    {
      name: "Slide 1",
      path: "./images/slide-1.jpg",
    },
    {
      name: "Slide 2",
      path: "./images/slide-2.jpg",
    },
    {
      name: "Slide 3",
      path: "./images/slide-3.jpg",
    },
    {
      name: "Slide 4",
      path: "./images/slide-4.jpg",
    },
  ];
  const filterOptions = [
    {
      value: "ALL",
    },
    {
      value: "FAST FOOD",
      path: "./images/fast-food.png",
    },
    {
      value: "HEALTHY",
      path: "./images/healthy.png",
    },
    {
      value: "BURGUER",
      path: "./images/burguer.png",
    },
    {
      value: "PIZZA",
      path: "./images/pizza.png",
    },
    {
      value: "CHICKEN",
      path: "./images/chicken.png",
    },
  ];

  return (
    <main className="home">
      <section className="home__carrousel">
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
          }}
          className="mySwiper"
        >
          {carrouselImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={image.path}
                  alt={image.name}
                  className="home__carrousel-image"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <h1 className="home__title">Restaurants</h1>
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
        }}
        className="mySwiper"
      >
        {filterOptions.map((option, index) => {
          return (
            <SwiperSlide key={index}>
              <section
                className={`home__filter-option ${
                  option.value == selectedOption
                    ? "home__filter-option--selected"
                    : ""
                }`}
              >
                {option?.path && (
                  <img
                    src={option.path}
                    alt={`${option.value} image`}
                    className="home__filter-option--icon"
                  />
                )}
                <p className="home__filter-option--text"> {option.value}</p>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default Home;
