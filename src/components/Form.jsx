import { useState } from "react";

import TextArea from "./TextArea";
import Button from "../Button";
import Emoji from "./Emoji";
import Modal from "./Modal";

const Form = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const emojis = Array.from({ length: 5 }, (_, i) => i + 1);
  const emojiFaces = ["🥵", "😔", "😑", "😌", "🥰"];
  const emojiFeedbackMessages = [
    "Terrible",
    "Very Poor",
    "SOSO",
    "Good",
    "Excellent",
  ];

  const handleHover = (value) => setHover(value);
  const handleRating = (value) => setRating(value);

  return (
    <div className="form-container">
      <div className="form-header">
        <div className="form-header_feedback">
          <span>📑</span>
          <h5>FEEDBACK</h5>
        </div>
        <div className="form-header_services">
          <span>📎</span>
          <h5>REQUEST SERVICE</h5>
        </div>
      </div>

      <div className="form-bottom">
        {/* EMOJI CONTAINER */}
        <div className="form-body">
          <div className="emoji-container emoji-grayscale">
            {emojis.map((emoji, index) => (
              <Emoji
                key={emoji}
                emoji={emoji}
                emojiFaces={emojiFaces}
                index={index}
                hover={hover}
                rating={rating}
                handleRating={handleRating}
                handleHover={handleHover}
              />
            ))}
          </div>
        </div>

        {/* INPUT FORM */}
        <TextArea />
        <Button setSubmitted={setSubmitted} rating={rating} />
        <p className="form-disclaimer">
          By proceeding, you agree to our{" "}
          <a href="#terms" className="form-disclaimer-link">
            Terms
          </a>{" "}
          and{" "}
          <a href="#privacy" className="form-disclaimer-link">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {submitted && (
        <Modal
          isOpen={setSubmitted}
          rating={rating}
          emojiFaces={emojiFaces}
          emojiFeedbackMessages={emojiFeedbackMessages}
        />
      )}
    </div>
  );
};

export default Form;
