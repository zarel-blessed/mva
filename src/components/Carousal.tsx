import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import MovieCard from "./MovieCard";

import "../scss/Carousal.scss";

const Carousal = ({
  data,
  title,
  isTV,
}: {
  data: any;
  title: string;
  isTV: boolean;
}) => {
  return (
    <div className="carousal">
      <div className="carousal-top">
        <h2>{title}</h2>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item: any) => (
          <SwiperSlide key={item.id}>
            <MovieCard movie={item} isTV={isTV} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
