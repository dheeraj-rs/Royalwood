import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';

function Shoplist() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="bg-gradient-to-r from-teal-200 to-teal-700 flex justify-center">
        <Link to="/">
          {' '}
          <BsArrowLeftShort className="w-10 h-10 absolute left-2 lg:left-14 top-2" />
        </Link>
        <div className="relative p-2 sm:block  w-3/4">
          <input
            type="text"
            className="w-full p-2  pl-10 text-sm rounded-md border text-gray-900 bg-gray-50 border-gray-300"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <BsSearch className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="w-full h-full flex-wrap flex justify-center pt-10">
        {searchTerm === ''
          ? products.map((item) => (
              <div
                key={item.id}
                className="w-[183px] h-[175px] flex-col flex justify-center items-center mb-2"
              >
                <div className="w-[85%] h-[73%] bg-[#9292921f] shadow-lg">
                  <img src={item.image} alt="" className="w-full h-full rounded-md" />
                </div>
                <div className="w-[85%] h-[27%] flex flex-col items-center pt-4 text-[13px]">
                  <p>{item.title}</p>
                  <p className="text-[#636363]">{item.price}</p>
                </div>
              </div>
            ))
          : filteredProducts.map((item) => (
              <div
                key={item.id}
                className="w-[183px] h-[175px] flex-col flex justify-center items-center mb-2"
              >
                <div className="w-[85%] h-[73%] bg-[#9292921f] shadow-lg">
                  <img src={item.image} alt="" className="w-full h-full rounded-md" />
                </div>
                <div className="w-[85%] h-[27%] flex flex-col items-center pt-4 text-[13px]">
                  <p>{item.title}</p>
                  <p className="text-[#636363]">{item.price}</p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default Shoplist;
