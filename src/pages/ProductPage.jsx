import Header from "../Header";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://69ec8be9af4ff533142b136c.mockapi.io/productlist/"+params.id )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, [params.id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-gray-200 rounded-xl overflow-hidden aspect-square">
          <img 
            src={product.img } 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.title }
            </h1>
            
            <p className="text-2xl font-semibold text-indigo-600 mb-6">
              {product.price ? `${product.price} ₽` : ""}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {product.description }
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-black font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md active:scale-95"
              onClick={() => alert('Товар добавлен!')}
            >
              В корзину
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition duration-200"
            >
              Отменить
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;