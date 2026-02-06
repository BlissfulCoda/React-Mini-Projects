const Button = ({ setSubmitted }) => {
  const handleSubmit = () => {
    if (setSubmitted) setSubmitted(true);
  };

  return (
    <button type="button" className="form-btn" onClick={handleSubmit}>
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
