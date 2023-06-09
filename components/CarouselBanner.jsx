import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const CarouselBanner = ({ banners }) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="banner"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.iamge + index}>
            <img src={banner.iamge} alt={banner.iamge} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselBanner;
