import { useState, useEffect } from "react";
import fetchDataFromAPI from "../api/fetchDataFromAPI";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import PersonCard from "./PersonCard";

const Cast = ({ id, isTV }: { id: number; isTV: boolean }) => {
  const [cast, setCast] = useState<any[] | null>(null);

  useEffect(() => {
    fetchDataFromAPI(
      `${isTV ? "tv" : "movie"}/${id}/credits?language=en-US`
    ).then((data) => setCast(data?.cast));
  }, [id]);

  return (
    <section className="carousal">
      <div
        style={{
          marginBottom: `1em`,
        }}
      >
        <h2
          style={{
            color: `var(--clr-light)`,
            fontWeight: `500`,
          }}
        >
          Cast
        </h2>
      </div>
      <div>
        <Swiper slidesPerView={8} spaceBetween={30} className="mySwiper">
          {cast?.map((person: any) => (
            <SwiperSlide key={person.id}>
              <PersonCard person={person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Cast;
