

function FirstConditional({isVisible,setIsVisible}){
    const age = 18
const message = age >=18
? "доступ разрешён"
: "доступ запрещён"


    

return(
<div>
{isVisible == true 
?<button onClick={()=>setIsVisible(false)}>выйти</button>
:<button onClick={()=>setIsVisible(true)}>войти</button>

}


</div>




)

}



export default FirstConditional