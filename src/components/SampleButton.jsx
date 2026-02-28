

function SampleButton({children}){
    return(

        <button className= "inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors cursor-pointer">
            {children}
        </button>
    )
}
export default SampleButton