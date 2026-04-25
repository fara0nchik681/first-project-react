import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://69ec8be9af4ff533142b136c.mockapi.io/productlist")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredItems(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) => {
      const price = parseFloat(item.price);
      return price >= (minPrice || 0) && price <= (maxPrice || Infinity);
    });
    setFilteredItems(filtered);
  }, [minPrice, maxPrice, products]);

  function addToBasket(id, count) {
    console.log(id, count);
  }

  function removeItem(id) {
    setProducts(products.filter((item) => item.id !== id));
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <h3 className="mt-4 text-xl text-gray-600">Загрузка...</h3>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border flex gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 uppercase">Мин. цена</label>
            <input 
              type="number" 
              value={minPrice} 
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 uppercase">Макс. цена</label>
            <input 
              type="number" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              img={product.img}
              onBuy={addToBasket}
              onRemove={() => removeItem(product.id)}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">Товары не найдены</div>
        )}
      </div>
    </div>
  );
}

export default ProductList;