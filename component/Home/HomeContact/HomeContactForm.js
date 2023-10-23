import React, { Fragment } from "react";
import CommonForm from "./CommonForm";
import Link from "next/link";
import { Fade } from "react-reveal";

const HomeContactForm = () => {
  const contactlist = [
    {
      cico: "contactlocation",
      ctitle: "Location",
      cpara: "Clive House, Clive Street, Bolton, BL1 ES",
    },
    {
      cico: "contactemail",
      ctitle: "Email Address",
      cpara: (
        <Fragment>
          <Link href="/">www.addvantage-technologies.co.uk</Link>
        </Fragment>
      ),
    },
    {
      cico: "contactphone",
      ctitle: "Phone Number",
      cpara: (
        <Fragment>
          <Link href="/">+44 (0)208 0166 020</Link>
        </Fragment>
      ),
    },
  ];
  return (
    <div className="homecontactformwrap">
      <div className="container">
        <div className="homecontactpart">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="contactleft pl-109">
                <div className="solutionlistmain">
                  {contactlist.map((clist, index) => {
                    return (
                      <Fade top duration={700} delay={index*25}>
                        <div className="solutionbox" key={index}>
                          <div className="listicon">
                            <img
                              src={`/images/Homecontact/${clist.cico}.svg`}
                              alt=""
                            />
                          </div>
                          <div className="solutioncontent">
                            <h4>{clist.ctitle}</h4>
                            <p>{clist.cpara}</p>
                          </div>
                        </div>
                      </Fade>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <CommonForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactForm;
