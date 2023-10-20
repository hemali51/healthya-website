import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <div className="downloadappwrap">
      <div className="container">
        <div className="downloadapppart">
          <div className="row align-items-center">
            <div className="col-md-9">
              <div className="downloadleft">
                <div className="commontitle">
                  <h3>
                    Download the <span>healthya app</span>
                  </h3>
                </div>
                <div className="leftcontentmainbox">
                  <div className="leftcontentdata">
                    <h6>Empowering you today for a healthya tomorrow!</h6>
                    <div className="appsbtns">
                      <div className="playstorebtn">
                        <Link href="/">
                          <img src="/images/downloadapp/playstore.png" alt="" />
                        </Link>
                      </div>
                      <div className="iosbtn">
                        <Link href="/">
                          <img src="/images/downloadapp/appstore.png" alt="" />
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
            <div className="col-md-3">
              <div className="downloadimg">
                <img src="/images/downloadapp/downloadimg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
