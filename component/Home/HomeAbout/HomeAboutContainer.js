import React from "react";
import Link from "next/link";

const HomeAboutContainer = () => {
  return (
    <div className="homeaboutwrapper">
      <div className="container">
        <div className="homeaboutpart">
          <div className="abouttitle">
            <h2>
              The team at healthya are transforming the relationship between
              citizens and health services by creating and delievering the most
              compelling innovative <span>Digital-First</span> pathways to drive
              healthcare sustainability.
            </h2>
          </div>
          <div className="homeaboutcontent">
            <p>
              We believe if individuals and communities are healthy,helathcare
              systems are healthy!
            </p>
            <p>
              The team at healthya are transforming the  relationship between
              citizens and health services by creating and delivering the most
              compelling innovative Digital-First pathways to drive healthcare
              sustainability.
            </p>
            <p>
              We have a proven track-record to work in a true consultative
              partnership model, customising and iterating our core solutions to
              address unique healthcare challenges for large transformations. So
              let us be your health-tech partners of choice to deliver on your
              transformation goals and objectives!
            </p>
            <div className="commonbtn">
              <Link href="/">Let’s Connect</Link>
            </div>
          </div>
          <div className="homeaboutpatten">
            <img src="/images/homeabout/aboutuspattern.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutContainer;
