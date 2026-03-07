import CardView from "./CardView"
import { useState } from "react"
import CardButton from "./CardButton"
function CardCounter(){
    const [count, setCount] = useState(0)

    return(
<div className="p-4">

<CardView count={count}/>
<CardButton 
count={count}
setCount={setCount}
/>



</div>


    )
}
export default CardCounter