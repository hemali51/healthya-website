
import HomeAboutContainer from "@/component/Home/HomeAbout/HomeAboutContainer";
import HomeBanner from "@/component/Home/HomeBanner/HomeBanner"
import React from "react"

export default function Home() {
  return (
    <div className="mainpage">
      <HomeBanner />
      <HomeAboutContainer/>
    </div>
  )
}
