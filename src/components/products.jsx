import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://69ec8be9af4ff533142b136c.mockapi.io/productlist")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              {/* Заглушка для изображения (если в API есть поле image, замени src) */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Нет фото</span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-blue-600">
                    {product.price} ₽
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;