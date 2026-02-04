const TextArea = () => {
  return (
    <div className="form">
      <div className="form-input">
        <label htmlFor="form-info">
          <div className="form-label">
            Anything you wish we could improve upon?
          </div>
          <textarea
            name="form-info"
            rows={4}
            placeholder="Add a comment"
            className="textarea"
          />
        </label>
      </div>
    </div>
  );
};

export default TextArea;
