import React, { useEffect } from "react";

const HomeBannerBottom = () => {
  const bannerBottomAnimation = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function () {
        var bannerBottom = document.querySelector(".bannerbottompart");
        var bannerBottomImage = document.querySelector(
          ".bannerbottompart .leftsideimg img"
        );
        if (bannerBottom) {
          var bannerBottomPosition = bannerBottom.getBoundingClientRect();
          if (bannerBottomPosition.top < window.innerHeight) {
            var value = window.scrollY;
            var transformValue = value / 3500 + 1;
            if (transformValue > 1.15) {
              transformValue = 1.15;
            }
            bannerBottomImage.style.transform = `scale(${transformValue})`;
          }
        }
      });
    }
  };
  useEffect(() => {
    bannerBottomAnimation();
  }, []);
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
};

export default HomeBannerBottom;
