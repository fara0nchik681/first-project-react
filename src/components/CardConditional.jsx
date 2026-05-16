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
?<button onClick={()=>setIsLogin(false)}>выйти</button>
:<button onClick={()=>setIsLogin(true)}>войти</button>

}</Link>
<Link to={"/add"}><button>
админка

  </button></Link> 



</div>




)

}



export default CardConditional