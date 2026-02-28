function ProductCard({title,price,description,img}){
    return(
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <img src={img}></img>
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-blue-100 text-blue-600">
  
  
</div>
        <p class="mb-5 font-normal text-gray-600 leading-relaxed"> {description}</p>
        <p class="text-xl font-extrabold text-gray-900 mb-4">
  <span class="text-sm font-medium text-gray-500 uppercase mr-1">{price}</span> 
   
</p>






        <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors cursor-pointer">
          Купить
        </button>
      </div>
    )
}
export default ProductCard