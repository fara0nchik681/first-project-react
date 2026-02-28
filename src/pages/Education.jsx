import MyComponent from "../components/myComponent"
import ProductCard from "../components/ProductCard"
import SampleBlock from "../components/SampleBlock"


function Education(){
    return(
        <div className="flex flex-col gap-10">

        <h1>обучающая страница</h1>
        <MyComponent/>
        <SampleBlock 
        title={"заголовок"}
        description={"описание"}
        />
        
        </div>
    )
}

export default Education