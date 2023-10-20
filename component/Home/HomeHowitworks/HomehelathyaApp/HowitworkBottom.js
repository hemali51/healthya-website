import Link from "next/link";
import React, { Fragment, useEffect } from "react";

const HowitworkBottom = () => {
  const howitcontent = [
    {
      himg: "kioskimgone",
      htitle: "BMI (Body Mass Index)",
      hparagraph:
        "Quantifies body size using weight and height. Crucial for assessing health risks and population obesity trends, guiding prevention and care.",
    },
    {
      himg: "kioskimgtwo",
      htitle: "Weight Management",
      hparagraph:
        "Driven through data to achieve a healthy body weight through balanced nutrition and physical activity. It’s vital for overall health, reducing disease risk, and enhancing well-being.",
    },
    {
      himg: "kioskimgthree",
      htitle: "Cardiovascular risk",
      hparagraph:
        "Refers to the likelihood of heart and blood vessel problems. Proactive management is crucial for preventing heart disease, stroke, and improving overall health and longevity.",
    },
    {
      himg: "kioskimgfour",
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
  const imagesArr = howitcontent.map((data) => {
    return data.himg;
  });
  function isInViewport(element,scrollYNeeded) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= -scrollYNeeded &&
      bounding.height / 2 <= window.innerHeight &&
      bounding.top <= window.innerHeight - scrollYNeeded
    );
  }
  const kioskAnimation = () => {
    if(typeof window !== "undefined"){
      var scrollYNeeded = window.innerHeight * 0.4;
      var contentBox = document.querySelectorAll('.kioskImageWrapper .howitcontentbox')
      contentBox.forEach(function(box){
        window.addEventListener('scroll',function(){
          let image = document.querySelector(`.kioskImages[data-section="${box.getAttribute('data-image')}"]`)
          if(isInViewport(box,scrollYNeeded)){
            image.classList.add('active')
          } else {
            image.classList.remove('active')
          }
        })
      })
    }
  }
  useEffect(()=>{
    kioskAnimation()
  },[])
  return (
    <div className="howitworkbottompart kioskImageWrapper">
      <div className="howitleftpart w-60 pl-109">
        <div className="leftsticky">
          <div className="darkpattern">
            <img src="images/howitwork/howitworkdarkone.png" alt="" />
          </div>
          <div className="staticimages leftimages">
            <img src="images/howitwork/kioskimg.png" alt="" />
          </div>
          {imagesArr.map((img, index) => {
            return (
              <div className="leftimages kioskImages" data-section={`image${index}`}>
                <img src={`/images/howitwork/${img}.png`} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="howitworkright w-40">
        {howitcontent.map((data, index) => {
          return (
            <div className="howitcontentbox" key={index} data-image={`image${index}`}>
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
