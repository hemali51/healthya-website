import React from "react";
import Homehealthyaapp from "./HomehelathyaApp/Homehealthyaapp";
import HomeCompanionMain from "./HomeCompanionApp/HomeCompanionMain";

const Homehowitworks = () => {
  return (
    <div className="howitworkswrap">
      <div className="howitworkpart">
        <Homehealthyaapp />
        <HomeCompanionMain/>
      </div>
    </div>
  );
};

export default Homehowitworks;
