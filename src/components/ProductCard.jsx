

import { useState } from "react";
import CardCounter from "./CardCounter";
import FavoriteConditional from "./FavoriteConditional";

function ProductCard({ id, title, price, description, img, onBuy, onRemove }) {
  const [isFav, setIsFav] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <div className="relative flex flex-col p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
      <FavoriteConditional isFav={isFav} setIsFav={setIsFav} />
      
      <div className="h-48 flex items-center justify-center mb-4">
        <img src={img} alt={title} className="max-h-full object-contain" />
      </div>

      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-600 flex-grow leading-relaxed line-clamp-3">
        {description}
      </p>
      
      <p className="text-2xl font-black text-blue-600 mb-4">{price} ₽</p>

      <div className="mb-4">
        <CardCounter count={count} setCount={setCount} />
      </div>

      <div className="flex gap-2">
        <button 
          onClick={() => onBuy(id, count)}
          className="flex-grow bg-blue-600 text-black px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Купить
        </button>
        <button 
          onClick={onRemove}
          className="px-3 py-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-black transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default ProductCard;





  
