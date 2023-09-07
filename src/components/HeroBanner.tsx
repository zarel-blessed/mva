import { useState, useEffect, FormEvent } from "react";
import "../scss/HeroBanner.scss";
import useFetch from "../hooks/useFetch";
import Image from "./Image";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const [backdropPath, setBackdropPath] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useFetch("movie/upcoming?language=en-US&page=1");
  const navigate = useNavigate();

  useEffect(() => {
    let bg: any =
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackdropPath(bg);
  }, [data]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.length) navigate(`/search/${searchTerm}`);
  };

  return (
    <section className="hero-banner">
      {!isLoading && (
        <Image
          src={`https://image.tmdb.org/t/p/original${backdropPath}`}
          alt="bg"
          width="100%"
        />
      )}
      <div className="wrapper">
        <h1>Welcome.</h1>
        <p>Discover over 10 million movies from over 28+ movie resources.</p>
        <form>
          <input
            placeholder="Search for movies..."
            type="text"
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroBanner;
