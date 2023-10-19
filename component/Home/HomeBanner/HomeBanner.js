import React from "react";
import HomeBannerTop from "./HomeBannerTop";
import HomeBannerBottom from "./HomeBannerBottom";

const HomeBanner = () => {
  return (
    <div className="bannerwrapper">
      <HomeBannerTop />
      <HomeBannerBottom />
      <div className="bannerpatten">
        <img src="/images/homebanner/bannerpattern.png" alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
