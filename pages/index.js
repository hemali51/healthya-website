
import DownloadApp from "@/component/Home/DownloadApp/DownloadApp";
import HomeAboutContainer from "@/component/Home/HomeAbout/HomeAboutContainer";
import HomeBanner from "@/component/Home/HomeBanner/HomeBanner";
import Homehowitworks from "@/component/Home/HomeHowitworks/Homehowitworks";
import HomeSolution from "@/component/Home/HomeSolution/HomeSolution";
import Head from "next/head";
import React from "react"

export default function Home() {
  return (
    <div className="mainpage">
      <Head>
        <title>healthya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeBanner />
      <HomeAboutContainer />
      <HomeSolution />
      <Homehowitworks />
      <DownloadApp/>
    </div>
  );
}
