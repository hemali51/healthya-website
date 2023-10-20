import React from "react";
const Loader = ({isLoading}) => {
  return (
    <div className={`loader ${isLoading?'loading':''}`}>
      <div className="inner">
        <img src="/images/loader-img.png" width="128" alt="" />
      </div>
    </div>
  );
};

export default Loader;
