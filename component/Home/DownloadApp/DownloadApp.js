import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <div className="downloadappwrap">
      <div className="container">
        <div className="downloadapppart">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="downloadleft pl-109">
                <div className="commontitle">
                  <h3>
                    Download the <span>healthya app</span>
                  </h3>
                  <h6>Empowering you today for a healthya tomorrow!</h6>
                </div>
                <div className="leftcontentmainbox">
                  <div className="leftcontentdata">
                    <div className="appsbtns">
                      <div className="iosbtn">
                        <Link href="/">
                          <img src="/images/downloadapp/appstore.png" alt="" />
                        </Link>
                      </div>
                      <div className="playstorebtn">
                        <Link href="/">
                          <img src="/images/downloadapp/playstore.png" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="rightqrimg">
                    <img src="/images/downloadapp/qrcode.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="downloadimg">
                {/* <img src="/images/downloadapp/downloadimg.png" alt="" /> */}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/watch?v=F2dGWIScEPM"
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
