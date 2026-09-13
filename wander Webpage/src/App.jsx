import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Traveler from "./Components/TravelersChoose/Traveler";
import DestinationCard from "./Components/DestinationsCard/DestinationCard";
import TourPackages from "./Components/TourPackages/TourPackages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Traveler />
      <DestinationCard />
      <TourPackages />
    </div>
  );
};

export default App;
