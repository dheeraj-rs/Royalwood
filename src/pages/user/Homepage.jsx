import React from "react";
import HomeNavbar from "../../components/homeNavbar/HomeNavbar";
import HomeSearchbar from "../../components/homeSearchbar/HomeSearchbar";
import HomeCatagory from "../../components/HomeCatagory/HomeCatagory";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import HomeShoplist from "../../components/homeShoplist/HomeShoplist";
import HomeService from "../../components/homeService/HomeService";
import HomeCopyright from "../../components/homeCopyright/HomeCopyright";
import HomeSidebar from "../../components/homeSidebar/HomeSidebar";

function Homepage() {
  return (
    <React.Fragment>
      <HomeNavbar />
      <HomeSidebar />
      <HomeSearchbar />
      <HomeCatagory />
      <HomeBanner />
      <HomeShoplist />
      <HomeService />
      <HomeCopyright />
    </React.Fragment>
  );
}

export default Homepage;
