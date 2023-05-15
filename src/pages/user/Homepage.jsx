import React from "react";
import HomeNavbar from "../../components/homeNavigation/HomeNavbar";
import HomeSearchbar from "../../components/homeSearchbar/HomeSearchbar";
import HomeCatagory from "../../components/HomeCatagory/HomeCatagory";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import HomeShoplist from "../../components/homeShoplist/HomeShoplist";
import HomeService from "../../components/homeService/HomeService";
import HomeCopyright from "../../components/homeCopyright/HomeCopyright";

function Homepage() {
  return (
    <React.Fragment>
      <HomeNavbar />
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

