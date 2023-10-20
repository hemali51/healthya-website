import React from "react";

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
      cimg: "mobilescreen_one",
      ctitle: "Locate a healthya station nearby",
      cpara:
        "Use our app or website to find the closest healthya station in your area. These stations are conveniently located for easy access",
    },
    {
      id: 3,
      cimg: "mobilescreen_one",
      ctitle: "Locate a healthya station nearby",
      cpara:
        "Use our app or website to find the closest healthya station in your area. These stations are conveniently located for easy access",
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
                </div>
              );
            })}
          </div>
          <div className="comapinonrightpart w-40">
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
  );
};

export default HomeCompanionBottom;
