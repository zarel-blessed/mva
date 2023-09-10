import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import fetchDataFromAPI from "./api/fetchDataFromAPI";
import { useDispatch } from "react-redux";
import { getTVGenres, getMVGenres } from "./features/configure";
import Header from "./components/Header";
import { Home, SearchResults, MovieDetails, PageNotFound } from "./pages";
import Footer from "./components/Footer";
import ShowDetails from "./pages/ShowDetails";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let genres_list: [number, string][] = [];
    fetchDataFromAPI(`genre/movie/list?language=en`).then((data) => {
      data?.genres.forEach((genre: { id: number; name: string }) => {
        genres_list.push([genre?.id, genre?.name]);
      });
      dispatch(getMVGenres(genres_list));
    });
  }, []);

  useEffect(() => {
    let genres_list: [number, string][] = [];
    fetchDataFromAPI(`genre/tv/list?language=en`).then((data) => {
      data.genres.forEach((genre: { id: number; name: string }) => {
        genres_list.push([genre.id, genre.name]);
      });
      dispatch(getTVGenres(genres_list));
    });
  }, []);

  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<ShowDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
