import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchNavbar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim() !== '') {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          const filteredSuggestions = response.data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    };
    const timeoutId = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    if (suggestions.length > 0 && !selectedProduct) {
      setSelectedProduct(suggestions[0]);
    }
  }, [suggestions, selectedProduct]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSuggestionClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="w-full h-16 bg-green-500 flex justify-center p-2">
        <input
          className="w-[95%] p-2"
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full h-auto">
        {selectedProduct && (
          <div className="bg-cyan-400 w-full h-auto">
            <img src={selectedProduct.image} alt="" className="w-40 h-30" />
            <h2>{selectedProduct.title}</h2>
            <p>Price: {selectedProduct.price}</p>
          </div>
        )}
      </div>
      <ul className="w-full flex flex-col items-start p-2 mt-10">
        {suggestions.map((product) => (
          <li
            className="flex justify-center items-center"
            key={product.id}
            onClick={() => handleSuggestionClick(product)}
          >
            <img className="w-5 h-5" src={product.image} alt="" />
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchNavbar;