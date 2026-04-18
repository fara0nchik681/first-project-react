import ProductCard from "./ProductCard"
import { useState } from "react"
import { useEffect } from "react"
import SearchBlock from "./SearchBlock"


function ProductList() {
  const data = [
    { title: "комп", price: "8000", description: "хороший", img: "/fc3c050fd142ebbe9877fe65b4de8376.webp", id: "1" },
    { title: "телефон", price: "5000", description: "хороший", img: "/orig.jpg", id: "2" },
    { title: "тв", price: "4000", description: "хороший", img: "/slide-2-m.jpg", id: "3" }
  ];

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(data);
      setFilteredItems(data);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) => {
      const price = parseFloat(item.price);
      return price >= (minPrice || 0) && price <= (maxPrice || Infinity);
    });
    setFilteredItems(filtered);
  }, [minPrice, maxPrice, items]);

  function removeItem(id) {
    const updateList = items.filter((item) => item.id !== id);
    setItems(updateList);
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <h3 className="text-xl font-medium text-gray-600">Загрузка...</h3>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">Мин. цена</label>
          <input 
            type="number" 
            value={minPrice} 
            onChange={(e) => setMinPrice(e.target.value)}
            className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">Макс. цена</label>
          <input 
            type="number" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="group bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-lg">{item.title}</h4>
            <p className="text-gray-500 text-sm h-10 overflow-hidden">{item.description}</p>
            <p className="text-blue-600 font-bold mt-2 text-xl">{item.price} ₽</p>
            
            <button 
              onClick={() => removeItem(item.id)}
              className="mt-4 w-full bg-red-50 text-red-500 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-gray-400 text-xl font-light">
          Товары в данном диапазоне цен не найдены
        </div>
      )}
    </div>
  );
}

export default ProductList;