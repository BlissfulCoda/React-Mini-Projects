const Button = ({ setSubmitted, rating = 0 }) => {
  const disabled = rating <= 0;

  const handleSubmit = () => {
    if (disabled || !setSubmitted) return;
    setSubmitted(true);
  };

  return (
    <button
      type="button"
      className={`form-btn${disabled ? " disabled" : ""}`}
      onClick={handleSubmit}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <div className="form-btn_outter">
        <div className="form-btn_inner">
          <span className="form-btn_text">Submit Feedback</span>
          <span className="btn-envolope">✈️</span>
        </div>
      </div>
    </button>
  );
};

export default Button;
