import React from "react";

const HowitworkBottom = () => {
  const howitcontent = [
    {
      id: 1,
      himg: "kiskoimgone",
      htitle: "BMI (Body Mass Index)",
      hparagraph:
        "Quantifies body size using weight and height. Crucial for assessing health risks and population obesity trends, guiding prevention and care.",
    },
    {
      id: 2,
      himg: "kiskoimgone",
      htitle: "BMI (Body Mass Index)",
      hparagraph:
        "Quantifies body size using weight and height. Crucial for assessing health risks and population obesity trends, guiding prevention and care.",
    },
    {
      id: 3,
      himg: "kiskoimgone",
      htitle: "BMI (Body Mass Index)",
      hparagraph:
        "Quantifies body size using weight and height. Crucial for assessing health risks and population obesity trends, guiding prevention and care.",
    },
    {
      id: 4,
      himg: "kiskoimgone",
      htitle: "BMI (Body Mass Index)",
      hparagraph:
        "Quantifies body size using weight and height. Crucial for assessing health risks and population obesity trends, guiding prevention and care.",
    },
  ];
  return (
    <div className="howitworkbottompart">
      <div className="howitleftpart w-60 pl-109">
        <div className="leftsticky">
          <div className="darkpattern">
            <img src="images/howitwork/howitworkdarkone.png" alt="" />
          </div>
          <div className="leftimages">
            <img src="images/howitwork/kiskoimgone.png" alt="" />
          </div>
          <div className="leftimages">
            <img src="images/howitwork/kiskoimgone.png" alt="" />
          </div>
          <div className="leftimages">
            <img src="images/howitwork/kiskoimgone.png" alt="" />
          </div>
          <div className="leftimages">
            <img src="images/howitwork/kiskoimgone.png" alt="" />
          </div>
        </div>
      </div>
      <div className="howitworkright w-40">
        {howitcontent.map((data) => {
          return (
            <div className="howitcontentbox" key={data.id}>
              <div className="mobileshow">
                <img src={`/images/howitwork/${data.himg}.png`} alt="" />
              </div>
              <h4>{data.htitle}</h4>
              <p>{data.hparagraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowitworkBottom;
