function HomeService() {
  return (
    <div className=" w-full h-auto  p-3 gap-3 flex-col sm:flex-row sm:items-center py-10 hidden lg:flex bg-blue-gray-50">
      <div className=" w-full  flex">
        <div className=" w-1/2 h-full flex flex-col items-center ">
          <div className="w-5/6">
            <p className=" pb-2 text-sm">CUSTOMER SERVICE</p>
            <p className=" text-xs text-[#929292d9]">Help & Contact Us</p>
            <p className=" text-xs text-[#929292d9]">Returns & Refunds</p>
            <p className=" text-xs text-[#929292d9]">Online Stores</p>
            <p className=" text-xs text-[#929292d9]">Terms & Conditions</p>
          </div>
        </div>
        <div className=" w-1/2 h-full flex flex-col items-center  ">
          <div className="w-5/6">
            <p className=" pb-2 text-sm">COMPANY</p>
            <p className=" text-xs text-[#929292d9]">What We Do</p>
            <p className=" text-xs text-[#929292d9]">Available Services</p>
            <p className=" text-xs text-[#929292d9]">Latest Posts</p>
            <p className=" text-xs text-[#929292d9]">FAQs</p>
          </div>
        </div>
      </div>

      <div className=" w-full flex">
        <div className=" w-1/2 h-full flex flex-col items-center  ">
          <div className=" w-5/6">
            <p className=" pb-2 text-sm">SOCIAL MEDIA</p>
            <p className=" text-xs text-[#929292d9]">Twitter</p>
            <p className=" text-xs text-[#929292d9]">Instagram</p>
            <p className=" text-xs text-[#929292d9]">Facebook</p>
            <p className=" text-xs text-[#929292d9]">Youtube</p>
          </div>
        </div>
        <div className=" w-1/2 h-full flex flex-col items-center ">
          <div className=" w-5/6">
            <p className=" pb-2 text-sm">PROFILE</p>
            <p className=" text-xs text-[#929292d9]">My Account</p>
            <p className=" text-xs text-[#929292d9]">Checkout</p>
            <p className=" text-xs text-[#929292d9]">Order Tracking</p>
            <p className=" text-xs text-[#929292d9]">Help & Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
