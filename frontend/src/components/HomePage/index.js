import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="slider-side-background">
        <img
          className="welcome-img"
          src="https://i.imgur.com/B5vWN1K.png"
        ></img>
        <img className="kaboba-img" src="https://i.imgur.com/lWHX8q0.png"></img>
        <div className="slider-container">
          <div className="slider"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
