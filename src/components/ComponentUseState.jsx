import { useState } from "react"

var count = 0
function ComponentUseState(){
    const [count,setCount] = useState(0)
    return(
        <div className="p-4">
   <p>{count}</p>     
<button onClick={()=>setCount(count + 1)}>
    увеличить
</button>
<button onClick={()=>setCount(count - 1)}>
    уменьшить
</button>
        </div>
    )
}
export default ComponentUseState