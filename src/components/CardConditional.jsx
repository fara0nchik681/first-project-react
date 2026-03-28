import { useState } from "react"

function CardConditional (){
    const [isLogin,setIsLogin] = useState(false)


    const age = 18
const message = age >=18
? "доступ разрешён"
: "доступ запрещён"


    

return(
<div>
{isLogin == true
?<button onClick={()=>setIsLogin(false)}>войти</button>
:<button onClick={()=>setIsLogin(true)}>выйти</button>

}


</div>




)

}



export default CardConditional