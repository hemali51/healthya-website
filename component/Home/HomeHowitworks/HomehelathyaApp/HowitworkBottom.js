import Link from "next/link";
import React, { Fragment } from "react";

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
      htitle: "Weight Management",
      hparagraph:
        "Driven through data to achieve a healthy body weight through balanced nutrition and physical activity. It’s vital for overall health, reducing disease risk, and enhancing well-being.",
    },
    {
      id: 3,
      himg: "kiskoimgone",
      htitle: "Cardiovascular risk",
      hparagraph:
        "Refers to the likelihood of heart and blood vessel problems. Proactive management is crucial for preventing heart disease, stroke, and improving overall health and longevity.",
    },
    {
      id: 4,
      himg: "kiskoimgone",
      htitle: "PreConsultation",
      hparagraph:
        "Delivered digitally empowers your clinician before your health and wellbeing consultation. It’s crucial for your clinician to understand all your health metrics, enabling accurate diagnosis and personalized care.",
      hbtn: (
        <Fragment>
          <div className="commonbtn greenborderbtn">
            <Link href="/">Learn More</Link>
          </div>
        </Fragment>
      ),
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
              {data.hbtn}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowitworkBottom;
