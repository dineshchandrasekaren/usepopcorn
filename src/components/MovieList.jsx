import ListBox from "./ListBox";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <ListBox>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.Title} />
      ))}
    </ListBox>
  );
};

export default MovieList;
