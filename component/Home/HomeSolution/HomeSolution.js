import React from "react";

const HomeSolution = () => {
  const solutionlist = [
    {
      id: 1,
      simg: "solution_one",
      stitle: "healthya stations",
      spara: "Durable Class2 medical grade hardware.",
    },
    {
      id: 2,
      simg: "solution_two",
      stitle: "Companion App",
      spara:
        "Sophisticated patient-facing app with online and video consultation pathway capabilities.",
    },
    {
      id: 3,
      simg: "solution_three",
      stitle: "healthya Reporting",
      spara:
        "Organisation-facing powerful data analytics and user recall systems.",
    },
  ];
  return (
    <div className="homesolutionwrap bg_white">
      <div className="container">
        <div className="homesolutionpart">
          <div className="solutionleftside">
            <div className="commontitle">
              <h3>
                The healthya <span>solution.</span>
              </h3>
            </div>
            <p>
              Our solution offers the ultimate Digital-First clinical pathways,
              to deliver a true pro-active, preventative approach to Population
              Health Management. Healthya is approved on the NHS DFOCVC
              Framework, and comprises:
            </p>
            <div className="solutionlistmain">
              <div className="solutionslist">
                {solutionlist.map((list) => {
                  return (
                    <div className="solutionbox" key={list.id}>
                      <div className="listicon">
                       <img src={`/images/homesolution/${list.simg}.svg`} alt=""/>
                      </div>
                      <div className="solutioncontent">
                        <h4>{list.stitle}</h4>
                        <p>{list.spara}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="solutiomrightside">
            <img src="/images/homesolution/solutionmainimg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolution;
