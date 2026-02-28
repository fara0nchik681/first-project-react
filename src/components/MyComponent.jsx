import MyElement from "./myElement"
import SampleButton from "./SampleButton"
function MyComponent (){

const name = "Demo Name"
const price = 100

    return(
        <div>
            <h2>род компонент</h2>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Price with discount:{price * 0.5} </p>
            <SampleButton> в корзину </SampleButton>
        </div>
    )
}
export default MyComponent