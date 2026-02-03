import Kicker from "./Kicker";
const Header = ({ title = "ENTER A", subtitle = "FEEDBACK" }) => {
  return (
    <div className="inner-container">
      <Kicker />
      <h1>
        {title} <span className="feedback-span">{subtitle}</span>
      </h1>
      <p className="feedback-paragraph ">
        Your input is important to us. We take customer feedback very seriously
      </p>
    </div>
  );
};

export default Header;
