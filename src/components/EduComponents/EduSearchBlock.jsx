import { useState } from "react"


function EduSearchBlock({items,setSearchFilter}){
    const [query,setQuery]= useState("")

function handleChange(event){
    const value = event.target.value
const listFiltered = items.filter(item=>
    item.name.toLowerCase().includes(value.toLowerCase())
    )
    setSearchFilter(listFiltered)
     setQuery(value)
    console.log(value)
}


    
return(
<input
type="text"
value={query}
placeholder="поиск..."
onChange={handleChange}
/>


)



}
export default EduSearchBlock