import { useState } from "react"
import { Link } from "react-router-dom"

function CardConditional (){
    const [isLogin,setIsLogin] = useState(false)


    const age = 18
const message = age >=18
? "доступ разрешён"
: "доступ запрещён"


    

return(
<div>
    <Link to ={"/login"}>{isLogin == true
?<button onClick={()=>setIsLogin(false)}>войти</button>
:<button onClick={()=>setIsLogin(true)}>выйти</button>

}</Link>



</div>




)

}



export default CardConditional