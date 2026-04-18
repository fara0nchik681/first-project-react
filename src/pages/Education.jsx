import MyComponent from "../components/myComponent"
import ProductCard from "../components/ProductCard"
import SampleBlock from "../components/SampleBlock"
import ComponentUseState from "../components/ComponentUseState"
import SampleBlockUseState from "../components/SampleBlockUseState"
import Counter from "../components/Counter"
import MyList from "../components/MyList"
import FirstConditional from "../components/EduComponents/FirstConditional"
import { useState } from "react"
import OnChangeComp from "../components/OnChangeComp"
import { useEffect } from "react"



function Education(){
useEffect(()=>{},[])

const [number,setNumber] = useState(0)
const [isLogin,setIsLogin] = useState(false)

    return(
        <div className="flex flex-col gap-10">

        <h1>обучающая страница</h1>
        <MyComponent/>
        <SampleBlock 
        title={"заголовок"}
        description={"описание"}
        />
        <ComponentUseState/>
        <SampleBlockUseState/>
        <Counter/>
        <MyList/>
        <FirstConditional isLogin={isLogin} setIsLogin={setIsLogin}/>
        <button onClick={()=>setIsVisible(!isVisible) }>показать/скрыть</button>
        <OnChangeComp/>
       

        
        </div>
    )
}

export default Education