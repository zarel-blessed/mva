import Image from "./Image";
import "../scss/MovieCard.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";

const MovieCard = ({ movie, isTV }: { movie: any; isTV: boolean }) => {
  const genres = isTV
    ? useSelector<any, any>((state) => state.configure.tv_genres)
    : useSelector<any, any>((state) => state.configure.movie_genres);

  let genre_list = movie.genre_ids.map((id: number) => {
    let i = 0;
    while (genres?.[i][0] != id) {
      i++;
    }
    return genres?.[i][1];
  });

  console.log(`${isTV}: ${genre_list}`);

  return (
    <article>
      <div className="image-card">
        <div className="outer">
          <div
            className="inner"
            style={{
              backgroundImage: `conic-gradient(#521ac9 0deg, #521ac9 ${
                3.6 * movie.vote_average.toPrecision(2) * 10
              }deg, #320b87 ${
                3.6 * movie.vote_average.toPrecision(2) * 10
              }deg, #320b87 360deg )`,
            }}
          >
            <div className="center">{movie.vote_average.toPrecision(2)}</div>
          </div>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt="Card"
          width="180px"
        />
      </div>
      <div className="info">
        <p>
          {isTV ? movie.name.slice(0, 15) : movie.title.slice(0, 15)}
          {isTV
            ? movie.name.length >= 15 && "..."
            : movie.title.length >= 15 && "..."}
        </p>
        <p className="genres">{genre_list.join(", ")}</p>
      </div>
    </article>
  );
};

export default MovieCard;
