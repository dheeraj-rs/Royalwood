import slide from "../../assets/slide1.png";
function HomeBanner() {
  return (
    <div className=" w-full h-[54.5vh] sm:h-[100vh] lg:h-[54.5vh] flex justify-center">
      <div className="w-full h-full bg-[#9292921f] flex flex-col justify-center items-center">
        <div className=" w-full h-[65%] flex items-center justify-center">
          <img src={slide} alt="" className=" w-56 h-56 " />
        </div>
        <div className=" w-full h-[35%] flex flex-col items-start justify-start p-6">
          <p className=" text-2xl leading-3 tracking-widest">
            THINK DIFFDRENT.
          </p>
          <p className="pt-5 text-[#929292cb]">
            Royal is a unique & captivating theme designed
          </p>
          <p className="text-[#929292cb]">
            specificaly for all type of shops and online store.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
