import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Traveler from "./Components/TravelersChoose/Traveler";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Traveler />
    </div>
  );
};

export default App;
