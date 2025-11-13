import LabelWithEmoji from "./LabelWithEmoji";

const WatchedSummary = ({
  length,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) => {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <LabelWithEmoji emoji={"#️⃣"} label={length + " movies"} />
        <LabelWithEmoji emoji={"⭐️"} label={avgImdbRating} />
        <LabelWithEmoji emoji={"🌟"} label={avgUserRating} />
        <LabelWithEmoji emoji={"⏳"} label={avgRuntime + " min"} />
      </div>
    </div>
  );
};

export default WatchedSummary;
