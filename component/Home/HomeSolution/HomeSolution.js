import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade';
const HomeSolution = () => {
  const solutionlist = [
    {
      simg: "solution_one",
      stitle: "healthya stations",
      spara: "Durable Class2 medical grade hardware.",
    },
    {
      simg: "solution_two",
      stitle: "Companion App",
      spara:
        "Sophisticated patient-facing app with online and video consultation pathway capabilities.",
    },
    {
      simg: "solution_three",
      stitle: "healthya Reporting",
      spara:
        "Organisation-facing powerful data analytics and user recall systems.",
    },
  ];
  const solutiomrightsideAnimation = () => {
    if (typeof window !== "undefined") {
      var solutionrightWrapper = document.querySelector(".solutiomrightside");
      var solutionrightImage = document.querySelector(".solutiomrightside img");
      window.addEventListener("scroll", function () {
        if (solutionrightWrapper && solutionrightImage) {
          var solutionrightWrapperPosition = solutionrightWrapper.getBoundingClientRect();
          if (solutionrightWrapperPosition.top - 100 < window.innerHeight ) {
            var transformYValue =
              (window.innerHeight - 100 - solutionrightWrapperPosition.top) / 2;
              solutionrightImage.style.transform = `translateY(-${transformYValue}px)`;
          }
        }
      });
    }
  }
  useEffect(()=>{
    solutiomrightsideAnimation();
  },[])
  return (
    <div className="homesolutionwrap bg_white">
      <div className="container">
        <div className="homesolutionpart">
          <div className="solutionleftside">
            <div className="commontitle">
              <h3>
                The healthya <span>solution.</span>
              </h3>
            </div>
            <p>
              Our solution offers the ultimate Digital-First clinical pathways,
              to deliver a true pro-active, preventative approach to Population
              Health Management. Healthya is approved on the NHS DFOCVC
              Framework, and comprises:
            </p>
            <div className="solutionlistmain">
              <div className="solutionslist">
                {solutionlist.map((list,index) => {
                  return (
                    <Fade top duration={700} delay={index*25}>
                      <div className="solutionbox" key={index}>
                        <div className="listicon">
                        <img src={`/images/homesolution/${list.simg}.svg`} alt=""/>
                        </div>
                        <div className="solutioncontent">
                          <h4>{list.stitle}</h4>
                          <p>{list.spara}</p>
                        </div>
                      </div>
                    </Fade>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="solutiomrightside">
            <img src="/images/homesolution/solutionmainimg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolution;
