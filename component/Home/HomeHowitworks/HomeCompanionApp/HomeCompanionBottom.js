import React, { Fragment } from "react";
import Link from "next/link";

const HomeCompanionBottom = () => {
  const companionlist = [
    {
      id: 1,
      cimg: "mobilescreen_one",
      ctitle: "Locate a healthya station nearby",
      cpara:
        "Use our app or website to find the closest healthya station in your area. These stations are conveniently located for easy access",
    },
    {
      id: 2,
      cimg: "mobilescreen_two",
      ctitle: "Scan your unique QR Code",
      cpara:
        "Which is linked to your health profile. This ensures that the data collected is securely linked with your account.",
    },
    {
      id: 3,
      cimg: "mobilescreen_three",
      ctitle: "Receive your health metrics",
      cpara:
        "Your health metrics are sent directly into your app in an easy-to-understand format. These metrics are presented in a simple, jargon-free format that makes it easy for you to understand your health status.",
    },
    {
      id: 4,
      cimg: "mobilescreen_four",
      ctitle: "Start your wellness journey",
      cpara:
        "Armed with your health metrics, you can begin your journey toward better health. healthya provides tools to track your progress over time, helping you set and achieve your wellness goals.",
    },
    {
      id: 5,
      cimg: "mobilescreen_five",
      ctitle: "Access self-help guides and articles",
      cpara:
        "Our platform offers a wealth of self-help resources, including articles, guides, and tips on various health topics. Whether you're looking to improve your diet, manage stress, or adopt a healthier lifestyle, you'll find valuable information and advice. ",
    },
    {
      id: 6,
      cimg: "mobilescreen_six",
      ctitle: "Connect with healthcare professionals",
      cpara:
        "If you need personalized guidance or have specific health concerns, you can schedule video consultations or in-person appointments with the right experts to address all your health needs",
      cbtn: (
        <Fragment>
          <div className="commonbtn">
            <Link href="/">Learn More</Link>
          </div>
        </Fragment>
      ),
    },
  ];
  return (
    <div className="companionwrap">
      <div className="container">
        <div className="companionpart">
          <div className="comapnionleftpart w-60 pl-109">
            {companionlist.map((clist) => {
              return (
                <div
                  className="leftcomnioncontentbox howitcontentbox"
                  key={clist.id}
                >
                  <div className="mobileshow">
                    <img
                      src={`/images/howitwork/compamionapp/${clist.cimg}.png`}
                      alt=""
                    />
                  </div>
                  <h4>{clist.ctitle}</h4>
                  <p>{clist.cpara}</p>
                  {clist.cbtn}
                </div>
              );
            })}
          </div>
          <div className="comapinonrightpart w-40">
            <div className="stickyright">
              <div className="companionpattern">
                <img
                  src="/images/howitwork/compamionapp/companionappbgpattern.png"
                  alt=""
                />
              </div>
              <div className="companionmobileimg">
                <div className="mobileframe">
                  <img
                    src="/images/howitwork/compamionapp/mobileframe.png"
                    alt=""
                  />
                </div>
                <div className="mobilescreens">
                  {companionlist.map((imgs) => {
                    return (
                      <div className="mobilescreen">
                        <img
                          src={`/images/howitwork/compamionapp/${imgs.cimg}.png`}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCompanionBottom;
