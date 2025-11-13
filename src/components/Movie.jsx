import LabelWithEmoji from "./LabelWithEmoji";

const Movie = ({ movie }) => {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      {movie.userRating ? (
        <div>
          <LabelWithEmoji emoji={"⭐️"} label={movie.imdbRating} />
          <LabelWithEmoji emoji={"🌟"} label={movie.userRating} />
          <LabelWithEmoji emoji={"⏳"} label={movie.runtime + " min"} />
        </div>
      ) : (
        <div>
          <LabelWithEmoji emoji={"🗓"} label={movie.Year} />
        </div>
      )}
    </li>
  );
};

export default Movie;
