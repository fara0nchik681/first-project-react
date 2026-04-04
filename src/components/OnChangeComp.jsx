function OnChangeComp(){
    function handleChange(){
        console.log("страница education загрузилась")
    }

return(
<div>
<h2>событие onChange</h2>



<input type="text" 
placeholder="введите текст"
onChange={handleChange}
/>




</div>



)



}


export default OnChangeComp