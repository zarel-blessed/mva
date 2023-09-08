import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import fetchDataFromAPI from "../api/fetchDataFromAPI";
import Carousal from "../components/Carousal";
import "../scss/SearchResults.scss";

const SearchResults = () => {
  const [movies, setMovies] = useState<any[] | null>(null);
  const [tvs, setTvs] = useState<any[] | null>(null);
  let { searchTerm } = useParams();

  useEffect(() => {
    fetchDataFromAPI(
      `search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`
    ).then((data) => {
      setMovies(data?.results);
    });
  }, []);

  useEffect(() => {
    fetchDataFromAPI(
      `search/tv?query=${searchTerm}&include_adult=false&language=en-US&page=1`
    ).then((data) => {
      setTvs(data?.results);
    });
  }, []);

  return (
    <main className="main">
      <Wrapper>
        <section className="wrapper">
          <p className="message">
            <em>
              Showing results for <span>&lsquo;{searchTerm}&rsquo;</span>
            </em>
          </p>
          <div>
            <Carousal data={movies} title="Movies" isTV={false} />
            <Carousal data={tvs} title="OTT" isTV={true} />
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

export default SearchResults;
