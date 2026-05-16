import React, { useState } from 'react';
import { useEffect } from 'react';
const AddProductPage = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: ''
  });

  // Состояние для хранения списка всех добавленных товаров
  const [productList, setProductList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Добавляем текущий товар в список (добавляем id для ключа)
    const newProduct = { ...product, id: Date.now() };
    setProductList([newProduct, ...productList]);

    // Очищаем форму
    setProduct({ title: '', price: '', description: '', image: '' });
    console.log('Товар добавлен в список');
  };

  // Функция удаления товара
  const deleteProduct = (id) => {
    setProductList(productList.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Форма добавления */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Добавить товар
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Название</label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="название"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Цена</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="цена"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL картинки</label>
            <input
              type="url"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="https://images.com..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {product.image && (
            <div className="mt-2">
              <img src={product.image} alt="preview" className="h-20 w-20 object-cover rounded-lg border" />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-black font-semibold py-3 rounded-lg shadow-md transition duration-200"
          >
            Создать товар
          </button>
        </form>
      </div>

      {/* Список товаров */}
      <div className="w-full max-w-4xl">
        <h3 className="text-xl font-bold mb-4 text-gray-700">Ваши товары ({productList.length})</h3>
        





        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productList.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-md flex gap-4 items-center border">
              <img 
                src={item.image || 'https://placeholder.com'} 
                alt={item.title} 
                className="w-20 h-20 object-cover rounded-md bg-gray-100"
              />
              <div className="flex-1">
                <h4 className="font-bold text-lg leading-tight">{item.title}</h4>
                <p className="text-indigo-600 font-semibold">{item.price} ₽</p>
                <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                
              </div>
              <button
                onClick={() => deleteProduct(item.id)}
                className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-lg transition-colors border border-red-100"
              >
                Удалить
              </button>
            </div>
          ))}
        </div>

        {productList.length === 0 && (
          <p className="text-center text-gray-400 mt-10">Товары еще не добавлены</p>
        )}
      </div>
    </div>
  );
};

export default AddProductPage;