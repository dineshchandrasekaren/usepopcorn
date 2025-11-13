import LabelWithEmoji from "./LabelWithEmoji";
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <LabelWithEmoji emoji={"#️⃣"} label={watched.length + " movies"} />
        <LabelWithEmoji emoji={"⭐️"} label={avgImdbRating} />
        <LabelWithEmoji emoji={"🌟"} label={avgUserRating} />
        <LabelWithEmoji emoji={"⏳"} label={avgRuntime + " min"} />
      </div>
    </div>
  );
};

export default WatchedSummary;
