import ShoplistContainer from "./ShoplistContainer"
import Shoplistnav from "./Shoplistnav"

function HomeShoplist() {
  return (
    <div className=" max-w-max h-auto flex flex-col">
      <Shoplistnav />
      <ShoplistContainer />
    </div>
  )
}

export default HomeShoplist