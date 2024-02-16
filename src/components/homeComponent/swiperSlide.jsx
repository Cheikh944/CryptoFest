import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Axios from "../../Api/Axios";
import "./swiper.css";
import { Pagination } from "swiper/modules";
import Card from "./Card";
import { Link } from "react-router-dom";

const swiperSlide = () => {
  const [coins, setCoins] = useState(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    Axios.get("search/trending")
      .then((response) => {
        setCoins(response.data.coins.map((element) => <Card data={element} />));
      })
      .catch((error) => {});

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Swiper
        className="overflow-visible"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={screenWidth < 1125 ? screenWidth < 975 ? screenWidth < 620 ? 1 : 2: 3: 4}
      >
        {coins &&
          coins.map((coin, index) => (
            <SwiperSlide key={index} className="swiper-slide w-[250px]">
              {coin}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default swiperSlide;
