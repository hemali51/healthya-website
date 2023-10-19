import React, { useEffect } from "react";
import HomeBannerTop from "./HomeBannerTop";
import HomeBannerBottom from "./HomeBannerBottom";

const HomeBanner = () => {
  const bannerPatternAnimation = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function () {
        var mainDiv = document.querySelector(".bannerpatten");
        var patternDiv = document.querySelector(".bannerpatten .pattern");
        var value = window.scrollY;
        if (mainDiv) {
          var transformValue = value;
          patternDiv.style.transform = `translateX(-${transformValue}px)`;
        }
      });
    }
  };
  useEffect(() => {
    bannerPatternAnimation();
  }, []);
  return (
    <div className="bannerwrapper">
      <HomeBannerTop />
      <HomeBannerBottom />
      <div className="bannerpatten">
        <div className="pattern">
          <img src="/images/homebanner/newbannerpattern.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
