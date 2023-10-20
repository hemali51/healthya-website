import React from "react";
import Homehealthyaapp from "./HomehelathyaApp/Homehealthyaapp";
import HomeCompanionMain from "./HomeCompanionApp/HomeCompanionMain";
import HomeHealthyaReport from "./HomehealthyaReport/HomeHealthyaReport";

const Homehowitworks = () => {
  return (
    <div className="howitworkswrap">
      <div className="howitworkpart">
        <Homehealthyaapp />
        <HomeCompanionMain />
        <HomeHealthyaReport />
      </div>
    </div>
  );
};

export default Homehowitworks;
