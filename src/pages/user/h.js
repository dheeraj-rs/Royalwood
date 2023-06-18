import React from "react";
import HomeHeadNav from "../../components/HomeHeadNav/HomeHeadNav";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeJustforyouCard from "../../components/HomeJustforyouCard/HomeJustforyouCard3";
import SideMenubar from "../../components/SideMenubar/SideMenubar";
import HomeService from "../../components/HomeService/HomeService";
import HomeCopyright from "../../components/HomeCopyright/HomeCopyright";
import LoginForm from "../../components/LoginForm/LoginForm";
import HomeOutdoorCard from "../../components/HomeOutdoorCard/HomeOutdoorCard";
import HomeIndoreCard from "../../components/HomeIndoreCard/HomeIndoreCard";
import HomeBanner2 from "../../components/HomeBanner/HomeBanner2";
import MainFooter from "../../components/MainFooter/MainFooter";
import HomeLgIndoreCard from "../../components/HomeLgIndoreCard/HomeLgIndoreCard";
import HomeLgOutdoreCard from "../../components/HomeLgOutdoreCard/HomeLgOutdoreCard";
import HeadNav from "../../components/HomeHeadNav/HeadNav";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Homepage() {
  return (
    <React.Fragment>
      <LoginForm/>
      {/* <HeadNav/> */}
      <HomeHeadNav/>
      <HomeCarousel/> 
      {/* lg show  */}
      <HomeIndoreCard/> {/* lg hidden  */}
      <HomeBanner/> {/* lg hidden  */}
      <HomeOutdoorCard/> {/* lg hidden  */}
      <HomeLgIndoreCard /> {/* lg show */}
      <HomeLgOutdoreCard/> {/*  lg show */}
      <HomeBanner2/>
      <HomeJustforyouCard/>
      <HomeService /> {/*lg show */}
      <HomeCopyright />
      <MainFooter /> {/* md hiddem*/}
      <SideMenubar/> 
    </React.Fragment>
  );
}

export default Homepage;
