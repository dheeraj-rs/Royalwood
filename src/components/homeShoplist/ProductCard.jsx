import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ApiData } from "../../redux/Features/searchProducts";

function ProductCard() {
  // const [products, setProducts] = useState([]);
  const { products } = useSelector((state) => state.search);
const dispatch = useDispatch()
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // setProducts(response.data);
        dispatch(ApiData(response.data))
      } catch (error) {
        console.log(error ,"kkk");
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((items) => (
        <div
          key={items.id}
          className=" w-[183px] h-[175px] flex-col flex justify-center items-center mb-16"
        >
          <div className=" w-[85%] h-[73%] bg-[#9292921f] shadow-lg">
            <img
              src={items.image}
              alt=""
              className=" w-full h-full rounded-md"
            />
          </div>
          <div className="w-[85%] h-[27%] flex flex-col items-center pt-4 text-[13px]">
            <p>{items.title.slice(0, 20)}</p>
            <p className="text-[#636363]">{items.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
