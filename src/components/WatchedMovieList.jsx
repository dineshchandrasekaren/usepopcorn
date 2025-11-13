import ListBox from "./ListBox";
import Movie from "./Movie";

const WatchedMovieList = ({ watched }) => {
  return (
    <ListBox>
      {watched.map((movie) => (
        <Movie movie={movie} key={movie.Title} />
      ))}
    </ListBox>
  );
};

export default WatchedMovieList;
