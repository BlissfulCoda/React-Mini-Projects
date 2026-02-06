import { useState } from "react";
const TextArea = () => {
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="form">
      <div className="form-input">
        <label htmlFor="form-info">
          <div className="form-label">
            Anything you wish we could improve upon?
          </div>
          <textarea
            name="form-info"
            value={message}
            onChange={handleInput}
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
