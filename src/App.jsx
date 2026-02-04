import Header from "./components/Heading";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="main-container">
      <div className="outter-container">
        <Header title="GIVE US" subtitle="FEEDBACK" />
        <Form />
      </div>
    </div>
  );
};

export default App;
