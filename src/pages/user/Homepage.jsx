import React from "react";
import HomeCatagory from "../../components/HomeCatagory/HomeCatagory";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import HomeShoplist from "../../components/homeShoplist/HomeShoplist";
import HomeService from "../../components/homeService/HomeService";
import HomeCopyright from "../../components/homeCopyright/HomeCopyright";
import UserHeader from "../../components/UserHeader/UserHeader";
import UserFooter from "../../components/UserFooter/UserFooter";
import UserSearchbutton from "../../components/UserSearchbutton/UserSearchbutton";
import UserMenubar from "../../components/UserMenubar/UserMenubar";


function Homepage() {
  return (
    <React.Fragment>
      <UserHeader />
      <UserSearchbutton />
      <UserMenubar />

      <HomeCatagory />
      <HomeBanner />
      <HomeShoplist />
      <HomeService />
      <HomeCopyright />

      <UserFooter />
    </React.Fragment>
  );
}

export default Homepage;
