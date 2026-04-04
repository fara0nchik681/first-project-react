
import CounterView from "./CounterView"
import { useState } from "react"
import CounterButton from "./CounterButton"
import { useEffect } from "react"
function Counter(){
    const [count, setCount] = useState(0)



    useEffect(()=>{
console.log("значение count =", count)

    },[count])

    return(
<div className="p-4">
<h2>
общий счётчик
</h2>
<CounterView count={count}/>
<CounterButton 
count={count}
setCount={setCount}
/>



</div>


    )
}
export default Counter