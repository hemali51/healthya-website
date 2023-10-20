import React, { Fragment } from "react";
import Link from "next/link";

const HomeHealthyaBottom = () => {
  const healthyareport = [
    {
      id: 1,
      himg: "reportone",
      htitle: "Targeted Interventions",
      hparagraph:
        "Data insights pinpoint high-risk populations and specific health needs, enabling more effective resource allocation and intervention.",
    },
    {
      id: 2,
      himg: "reporttwo",
      htitle: "Improved Care Coordination",
      hparagraph:
        "Healthcare data fosters better collaboration among providers, enhancing patient care and reducing service duplication.",
    },
    {
      id: 3,
      himg: "reportthree",
      htitle: "Preventive Care",
      hparagraph:
        "Health data analysis identifies at-risk individuals for early intervention, reducing chronic disease rates and improving community health.",
    },
    {
      id: 4,
      himg: "reportfour",
      htitle: "Resource Allocation",
      hparagraph:
        "Data insights guide resource allocation, optimizing healthcare delivery by directing resources where needed most.",
    },
    {
      id: 5,
      himg: "reportfour",
      htitle: "Quality Improvement",
      hparagraph:
        "Ongoing data analysis tracks care quality, driving continuous improvement efforts to ensure optimal patient outcomes.",
      hbtn: (
        <Fragment>
          <div className="commonbtn greenborderbtn">
            <Link href="/">Learn More</Link>
          </div>
        </Fragment>
      ),
    },
  ];
  const imagesArr = healthyareport.map((data) => {
    return data.himg;
  });
  return (
    <div className="container">
      <div className="howitworkbottompart">
        <div className="howitleftpart w-60 pl-109">
          <div className="leftsticky">
            <div className="darkpattern">
              <img src="images/howitwork/howitworkdarkone.png" alt="" />
            </div>
            <div className="laptopimg">
              <div className="laptopframe">
                <img src="/images//howitwork/healthyareporting/laptop_frame.png" alt=""/>
              </div>
              {imagesArr.map((img, index) => {
                return (
                  <div className="leftimages" key={index}>
                    <img
                      src={`/images/howitwork/healthyareporting/${img}.png`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="howitworkright w-40">
          {healthyareport.map((data) => {
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
    </div>
  );
};

export default HomeHealthyaBottom;
