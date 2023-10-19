import React, { useEffect } from 'react'

const HomeBannerBottom = () => {
  const bannerAnimation = () => {
    if(typeof window === "undefined") {
      return;
    }
    if(window.innerWidth < 768) {
      return;
    }
    window.addEventListener("scroll", function () {
      var mainDiv = document.querySelector(".bannerbottompart");
      var mainImg = document.querySelector(".bannerbottompart .leftsideimg img");
      var value = window.scrollY;
      if(mainDiv) {
        var transformValue = value / 4000 + 1;
        if(transformValue > 1.2) {
          transformValue = 1.2;
        }
        mainImg.style.transform = `scale(${transformValue})`;
      }
    });
  }
  useEffect(()=>{
    bannerAnimation();
  },[])
  return (
    <div className="bannerbottompart">
      <div className="leftsideimg">
        <img src="/images/homebanner/bannerroundimg.png" alt="" />
      </div>
      <div className="rightsideimg">
        <img src="/images/homebanner/homebannermobile.png" alt="" />
      </div>
    </div>
  );
}

export default HomeBannerBottom
