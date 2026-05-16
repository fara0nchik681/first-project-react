import { useState } from "react"


function TestForm(){
    const [text,setText]=useState("deko")

return(
<div>
<h1>первая форма</h1>
<input
type="text"
value={text}
onChange={(event)=>{
    setText(event.target.value)
console.log(event.target.value)


}}
/>





</div>



)
    
}

export default TestForm