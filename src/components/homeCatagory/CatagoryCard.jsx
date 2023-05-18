import { useSelector } from "react-redux";
import img from "../../assets/slide1.png";
function CatagoryCard() {
  const { products } = useSelector((state) => state.search);
  return (
    <>
    {products.map((items) => ( 
       <div
        key={items.id} 
       className="w-[200%] h-[80%] flex flex-row pl-3  ">
      <div className="w-16 h-full">
        <div className="w-full h-[80%] p-1">
          <img src={items.image} alt="img" className="w-full h-full" />
        </div>
        <div className="w-full h-[20%] text-sm flex items-center justify-center">
          <p>{items.category.slice(0, 5)}</p>
        </div>
      </div>
    </div>
     ))}
     </>
  );
}

export default CatagoryCard;