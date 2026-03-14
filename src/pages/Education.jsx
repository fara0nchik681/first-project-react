import MyComponent from "../components/myComponent"
import ProductCard from "../components/ProductCard"
import SampleBlock from "../components/SampleBlock"
import ComponentUseState from "../components/ComponentUseState"
import SampleBlockUseState from "../components/SampleBlockUseState"
import Counter from "../components/Counter"
import MyList from "../components/MyList"



function Education(){
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
        
        </div>
    )
}

export default Education