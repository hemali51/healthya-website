import React from "react";
import HomeBannerTop from "./HomeBannerTop";
import HomeBannerBottom from "./HomeBannerBottom";

const HomeBanner = () => {
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
