import React, { Fragment, useEffect } from "react";
import Link from "next/link";

const HomeHealthyaBottom = () => {
  const healthyareport = [
    {
      himg: "reportone",
      htitle: "Targeted Interventions",
      hparagraph:
        "Data insights pinpoint high-risk populations and specific health needs, enabling more effective resource allocation and intervention.",
    },
    {
      himg: "reporttwo",
      htitle: "Improved Care Coordination",
      hparagraph:
        "Healthcare data fosters better collaboration among providers, enhancing patient care and reducing service duplication.",
    },
    {
      himg: "reportthree",
      htitle: "Preventive Care",
      hparagraph:
        "Health data analysis identifies at-risk individuals for early intervention, reducing chronic disease rates and improving community health.",
    },
    {
      himg: "reportfour",
      htitle: "Resource Allocation",
      hparagraph:
        "Data insights guide resource allocation, optimizing healthcare delivery by directing resources where needed most.",
    },
    {
      himg: "reportfive",
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
  function isInViewport(element,scrollYNeeded) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= -scrollYNeeded &&
      bounding.height / 2 <= window.innerHeight &&
      bounding.top <= window.innerHeight - scrollYNeeded
    );
  }
  const imagesArr = healthyareport.map((data) => {
    return data.himg;
  });
  const companionScrollAnimation = () => {
    if(typeof window !== "undefined"){
      var scrollYNeeded = window.innerHeight * 0.4;
      var contentBox = document.querySelectorAll('.howitworkright .howitcontentbox')
      contentBox.forEach(function(box){
        window.addEventListener('scroll',function(){
          let image = document.querySelector(`.laptopscreen[data-section="${box.getAttribute('data-image')}"]`)
          if(isInViewport(box,scrollYNeeded)){
            image?.classList.add('active')
          } else {
            image?.classList.remove('active')
          }
        })
      })
      window.addEventListener('scroll',function(){
        var hasACtiveScreen = document.querySelector('.companionlaptopimg .laptopscreen.active')
        if(hasACtiveScreen) {
          document.querySelector('.companionlaptopimg').classList.add('show')
        } else {
          document.querySelector('.companionlaptopimg').classList.remove('show')
        }
      })
    }
  }
  useEffect(()=>{
    companionScrollAnimation()
  },[])
  return (
    <div className="container">
      <div className="howitworkbottompart">
        <div className="howitleftpart w-60 pl-109">
          <div className="leftsticky">
            <div className="darkpattern">
              <img src="images/howitwork/howitworkdarkone.png" alt="" />
            </div>
            <div className="laptopimg companionlaptopimg">
              <div className="laptopframe">
                <img src="/images//howitwork/healthyareporting/laptop_frame.png" alt=""/>
              </div>
              <div className="laptopscreens">
              {imagesArr.map((img, index) => {
                return (
                  <div className="leftimages laptopscreen" key={index} data-section={`image${index}`}>
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
        </div>
        <div className="howitworkright laptop w-40">
          {healthyareport.map((data,index) => {
            return (
              <div className="howitcontentbox" key={data.id} data-image={`image${index}`}
              >
                <div className="mobileshow">
                  <img src={`/images/howitwork/healthyareporting/${data.himg}.png`} alt="" />
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
