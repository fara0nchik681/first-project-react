import { useState } from "react"



function SampleBlockUseState (){
const [active,setActive] = useState(false)
return(
<div className="p-4">
    <p>{active.toString()}</p>
<button onClick={()=>{setActive(!active)}}>
переключить
</button>




</div>



)

}
export default SampleBlockUseState