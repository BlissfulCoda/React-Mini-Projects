const Emoji = ({ emoji, emojiFaces, index }) => {
  return (
    <span className="emoji-card" onClick={() => handleClick(emoji)}>
      <span className="emoji-outter_wrapper">
        <span className="emoji-inner_wrapper">
          <span className="emoji">{emojiFaces[index]}</span>
        </span>
      </span>
    </span>
  );
};

export default Emoji;
