import ProductCard from "./ProductCard"
function ProductList(){
    return(
        <div className ='flex flex-wrap gap-5 mt-15'>
    <ProductCard
    title={"комп"}
    price={"Цена:3000р"}
    description={"кирпич"}
    img={"/fc3c050fd142ebbe9877fe65b4de8376.webp"}
    
    
    
    
    
    
    
    />
    <ProductCard
    title={"телефон"}
    price={"Цена:9407р"}
    description={"апле"}
    img={""}
    
    
    
    
    />
    <ProductCard
    title={"тв"}
    price={"Цена:24007р"}
    description={"нормальный"}
    img={"s"}
    
    
    
    
    
    
    
    
    />
    <ProductCard
    title={"пс4"}
    price={"Цена:2407р"}
    description={"хороший"}
    img={""}
    
    
    
    
    
    
    />
    </div>

    )
}
export default ProductList
