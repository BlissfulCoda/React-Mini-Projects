import TextArea from "./TextArea";
import Button from "../Button";

const Form = () => {
  const emojis = Array.from({ length: 5 }, (_, i) => i + 1);
  const emojiFaces = ["🥵", "😔", "😑", "😌", "🥰"];
  //   const emojiFeedbackMessages = [
  //     "Terrible",
  //     "Very Poor",
  //     "SOSO",
  //     "Good",
  //     "Excellent",
  //   ];
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
          <div className="emoji-container">
            {emojis.map((emoji, index) => (
              <span key={emoji} className="emoji-card">
                <span className="emoji-outter_wrapper">
                  <span className="emoji-inner_wrapper">
                    <span className="emoji">{emojiFaces[index]}</span>
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* INPUT FORM */}
        <TextArea />
        <Button />
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
    </div>
  );
};

export default Form;
