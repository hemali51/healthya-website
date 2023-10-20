import Link from "next/link";
import React, { Fragment } from "react";

const Footer = () => {
  const footeraddlink = [
    {
      ico: "footerpin",
      ftxt: "Clive House, Clive Street, Bolton, BL1 ES",
    },
    {
      ico: "footermail",
      ftxt: (
        <Fragment>
          <Link href="/">www.addvantage-technologies.co.uk</Link>
        </Fragment>
      ),
    },
    {
      ico: "footerphone",
      ftxt: (
        <Fragment>
          <Link href="/">+44 (0)208 0166 020</Link>
        </Fragment>
      ),
    },
  ];
  const quicklinks = [
    {
      flinkname: "Home",
      flink: "",
    },
    {
      flinkname: "Contact Us",
      flink: "",
    },
    {
      flinkname: "Privacy Policy",
      flink: "",
    },
    {
      flinkname: "Terms & Conditions",
      flink: "",
    },
  ];
  return (
    <div className="footerwrapper">
      <div className="container">
        <div className="footerpart">
          <div className="row">
            <div className="col-lg-5">
              <div className="footerleft pl-109">
                <div className="footerlogo">
                  <Link href="/">
                    <img src="/images/footer/footerlogo.svg" alt="" />
                  </Link>
                </div>
                <p>
                  At healthya we are all about supporting our healthcare
                  partners- increasing quality of life, saving time and
                  maximising productivity. With joint collaboration and cutting
                  edge technology
                </p>
                <div className="footerlinks">
                  <ul>
                    {footeraddlink.map((links, index) => {
                      return (
                        <li key={index}>
                          <div className="footerimg">
                            <img src={`/images/footer/${links.ico}.png`} />
                          </div>
                          <div className="linkcontent">
                            <p>{links.ftxt}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="footerright">
                <div className="row">
                  <div className="col-md-4">
                    <div className="quicklinks">
                      <h5>Quick Links</h5>
                      <ul>
                        {quicklinks.map((lin, index) => {
                          return (
                            <li key={index}>
                              <Link href="/">{lin.flinkname}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="footervideo">
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
          <div className="footerbottomlinks pl-109">
            <ul>
              {quicklinks.map((lin, index) => {
                return (
                  <li key={index}>
                    <Link href="/">{lin.flinkname}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
