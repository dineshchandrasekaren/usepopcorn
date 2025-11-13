import WatchedSummary from "./WatchedSummary";
import Box from "./Box";
import ListBox from "./ListBox";
import Movie from "./Movie";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedMovieList = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <Box>
      <WatchedSummary
        length={watched.length}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
        avgImdbRating={avgImdbRating}
      />

      <ListBox>
        {watched.map((movie) => (
          <Movie movie={movie} key={movie.Title} />
        ))}
      </ListBox>
    </Box>
  );
};

export default WatchedMovieList;
