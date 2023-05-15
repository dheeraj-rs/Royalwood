import img from "../../assets/slide1.png";
function CatagoryCard() {
  return (
    <div className="w-[200%] h-[80%] flex flex-row pl-3  ">
    <div className="w-16 h-full">
        <div className="w-full h-[80%] p-1"><img src={img} alt="img" className="w-full h-full"/></div>
        <div className="w-full h-[20%] text-sm flex items-center justify-center">dgrdllde</div>
    </div>
</div>
   
  )
}

export default CatagoryCard