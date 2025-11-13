import Box from "./Box";
import ListBox from "./ListBox";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <Box>
      <ListBox>
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.Title} />
        ))}
      </ListBox>
    </Box>
  );
};

export default MovieList;
