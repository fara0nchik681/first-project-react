import { useState } from "react"

function FavoriteConditional (){
    const [isFav,setIsFav] = useState(false)


    const age = 18
const message = age >=18
? "доступ разрешён"
: "доступ запрещён"


    

return(
<div>
{isFav == true
?<button onClick={()=>setIsFav(false)}>❤️ </button>
:<button onClick={()=>setIsFav(true)}>🤍</button>

}


</div>




)

}



export default FavoriteConditional