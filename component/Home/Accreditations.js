import React from "react";

const Accreditations = () => {
  const acoorditationimgs = [
    {
      aimg: "acoorditationone",
    },
    {
      aimg: "acoorditationtwo",
    },
    {
      aimg: "acoorditationfour",
    },
    {
      aimg: "acoorditationfive",
    },
  ];
  return (
    <div className="accorditationswrap">
      <div className="container">
        <div className="acoorditationpart pl-109">
          <div className="commontitle">
            <h3>Accreditations</h3>
          </div>
          <div className="acoorditationboxmain">
            <div className="row">
              {acoorditationimgs.map((imgs) => {
                return (
                  <div className="col-md-3">
                    <div className="acoorditationbox">
                      <img
                        src={`/images/acoorditation/${imgs.aimg}.png`}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
