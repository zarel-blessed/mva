import { useParams } from "react-router-dom";
import fetchDataFromAPI from "../api/fetchDataFromAPI";
import Image from "../components/Image";
import Wrapper from "../components/Wrapper";
import { useState, useEffect } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import "../scss/MovieDetails.scss";
import Cast from "../components/Cast";
import Carousal from "../components/Carousal";

const ShowDetails = () => {
  const [details, setDetails] = useState<any>(null);
  const [similar, setSimilar] = useState<any[] | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetchDataFromAPI(`tv/${id}?language=en-US`).then((data) =>
      setDetails(data)
    );
  }, [id]);

  useEffect(() => {
    fetchDataFromAPI(`tv/${id}/similar?language=en-US&page=1`).then((data) =>
      setSimilar(data?.results)
    );
  }, [id]);

  // console.log(similar);

  return (
    <main>
      <div className="backdrop">
        <Image
          src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
          alt=""
          width="100%"
        />
      </div>
      <Wrapper>
        <section className="container">
          <section className="details">
            <div className="poster">
              <Image
                src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
                alt="poster"
                width="240px"
              />
            </div>
            <aside>
              <div>
                <h2 className="title">
                  {details?.name}{" "}
                  <span>({details?.first_air_date.slice(0, 4)})</span>
                </h2>
                <p className="tagline">{details?.tagline}</p>
              </div>
              <div className="genres">
                {details?.genres?.map((genre: { id: number; name: string }) => (
                  <span className="genre" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </div>
              <div>
                <p className="status">
                  {details?.status}{" "}
                  {details?.status == "Released" && (
                    <span>
                      {details?.first_air_date.split("-").reverse().join("-")}
                    </span>
                  )}
                </p>
                <p className="trailer">
                  Play Trailer <FaPlay />
                </p>
              </div>
              <div className="overview">
                <h2>Overview</h2>
                <p>{details?.overview}</p>
              </div>
              <div>
                <div className="rating">
                  <div className="bar">
                    <div
                      className="inner_bar"
                      style={{
                        width: `${details?.vote_average * 10}px`,
                      }}
                    />
                  </div>
                  <div className="vote_average">
                    {details?.vote_average.toPrecision(2)}
                    <FaStar />
                  </div>
                </div>
              </div>
            </aside>
          </section>
          <div className="carousals">
            <Cast id={Number(id)} isTV={true} />
            <Carousal data={similar} title="Similar" isTV={true} />
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

export default ShowDetails;
