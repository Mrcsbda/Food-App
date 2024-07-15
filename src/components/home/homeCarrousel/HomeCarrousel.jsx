import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const HomeCarrousel = () => {
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
  return <section className="home__carrousel">
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
        1300: {
          slidesPerView: 4,
          spaceBetween: 20,
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
  </section>;
};

export default HomeCarrousel;
