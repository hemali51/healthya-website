import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.classList.add("menuopen");
    } else {
      document.body.classList.remove("menuopen");
    }
  };
  return (
    <div className="headerwrapper">
      <div className="container">
        <div className="headerpart d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="headermainwrapper">
            <div className="menutoggle dis-md-none">
              <button onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="headermobilemenu">
              <div className="menuhead dis-md-none">
                <div className=" d-flex align-items-center justify-content-between ">
                  <Link href="/">
                    <img src="/images/logo.svg" alt="" />
                  </Link>
                  <div className="menutoggle closemenu">
                    <button onClick={handleClick}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="headermenumainpart">
                <ul className="d-md-flex align-items-center d-sm-block">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Our Solution</Link>
                  </li>
                  <li>
                    <Link href="/">How Does It Work?</Link>
                  </li>
                  <li className="commonbtn dis-md-none">
                    <Link href="/">Booking System</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="commonbtn mobile-hide">
            <Link href="/">Booking System</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
