import ProductCard from "./ProductCard"
import { useState } from "react"

function ProductList(){
    const [items,setItems]  = useState([
{title:"комп",price:"8000",description:"хороший",img:"/fc3c050fd142ebbe9877fe65b4de8376.webp",id :"1"},
{title:"телефон",price:"5000",description:"хороший",img:"/orig.jpg",id :"2"},
{title:"тв",price:"4000",description:"хороший",img:"/slide-2-m.jpg",id :"3"}
])
function removeItem(id){
    const updateList = items.filter ((item)=> item.id !=id)
    setItems(updateList)
    console.log("удалён", updateList)
}




    return(
        <div className ='flex flex-wrap gap-5 mt-15'>
           {items.map((item)=>(
           <div key={item.id} className="border dorder-red-500">
<ProductCard
 title={item.title}
    price={item.price}
    description={item.description}
    img={item.img}
    id ={item.id}
    />
       



       
           </div>
           ))} 


             
    
    
    
    
    
    
    
    


   
    </div>

    )
}
export default ProductList
