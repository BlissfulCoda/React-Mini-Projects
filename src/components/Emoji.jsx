const Emoji = ({
  emoji,
  emojiFaces,
  index,
  hover,
  rating,
  handleRating,
  handleHover,
  displayOnly = false,
  isColored: isColoredProp,
}) => {
  const isColored = displayOnly ? isColoredProp : emoji <= (hover || rating);

  const wrapper = (
    <span className={`emoji-card ${isColored ? "emoji-colored" : ""}`}>
      <span className="emoji-outter_wrapper">
        <span className="emoji-inner_wrapper">
          <span className="emoji">{emojiFaces[index]}</span>
        </span>
      </span>
    </span>
  );

  if (displayOnly) {
    return wrapper;
  }

  return (
    <span
      onClick={() => handleRating(emoji)}
      onMouseEnter={() => handleHover(emoji)}
      onMouseLeave={() => handleHover(0)}
    >
      {wrapper}
    </span>
  );
};

export default Emoji;
