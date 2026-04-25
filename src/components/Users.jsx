import { useState, useEffect } from "react"


function Users (){
    const[users,setUsers] = useState ([])


    useEffect(()=>{
console.log("страница черемшы")
fetch("https://69ec8be9af4ff533142b136c.mockapi.io/users")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
setUsers(data)
})

    },[])

return(
<div>
<h2>список пользователей</h2>
{users.map((user)=>(
    <div>
        <img width={150} src={user.avatar}/>
        <p> имя {user.name}</p>
        <p> возраст {user.age}</p>
    </div>
))}

</div>


)



}
export default Users