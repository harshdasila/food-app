
import "./Shimmer.css"

const Shimmer = ()=>{
    return(
        <>
        <div className="container-s">
        {Array(10).fill("").map((e,index)=>(<div key={index} className="s1">
            <div className="image"></div>
            <div className="col1"></div>
            <div className="col2"></div>
        </div>))}
        
        
        </div>
        
        </>
    )
    
}
export default Shimmer;