import { useState } from "react"
import { useEffect } from "react"
import EduSearchBlock from "./EduComponents/EduSearchBlock"

function MyList (){
    const [items,setItems]  = useState([])
    const [filteredItems,setFilteredItems]=useState([])
    const [search,setSearch] = useState("")


    useEffect(()=>{
        setTimeout(() => {
            
      
const data= [
    {id: "1", name:"один", price:232},
    {id: "2",name: "два",price:678},
    {id: "3",name: "три",price:900}
]

setItems(data)
setFilteredItems(data)
}, 3000);

    },[])

function removeItem(id){
    const updateList = items.filter ((item)=> item.id !=id)
    setItems(updateList)
    console.log("удалён", updateList)
}

if(items.length == 0){
    return<h3>загрузка</h3>
}
    return(
<div className="flex flex-col gap-10 w-50">
    <h2>состояние UseEffect</h2>
    <EduSearchBlock items={items} setSearchFilter={setFilteredItems}/>
{filteredItems.map((item)=>(
    <div key={item.id} className="border dorder-red-500">
        <h2 >{item["name"]}</h2>
        <p>{item["price"]}$</p>
        <button onClick={()=>removeItem(item["id"])}>удалить</button>
    </div>
))}

</div>
    )
}

export default MyList