const LabelWithEmoji = ({ emoji, label }) => {
  return (
    <p>
      <span>{emoji}</span>
      <span>{label}</span>
    </p>
  );
};

export default LabelWithEmoji;
