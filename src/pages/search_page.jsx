import { Link, useParams } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import Catagorybar from "../components/Catagorybar";
import Navbar from "../components/Navbar";

function SearchingPage() {
    const dispatch = useDispatch()
    
    const {query} = useParams();
    var totalItems = []
    var q = query.toLowerCase();

    const total_products = useSelector((state)=>state.total_products)
    const single_product = useSelector((state) => state.single_product)
    
    const filter_products = total_products.filter((item)=>{
        // console.log(item)
        return (
            item.product && item.product.toLowerCase().includes(q) ||
            item.company && item.company.toLowerCase().includes(q) ||
            item.type && item.type.toLowerCase().includes(q) ||
            item.brand && item.brand.toLowerCase().includes(q) ||
            item.model && item.model.toLowerCase().includes(q) ||
            item.category && item.category.toLowerCase().includes(q) ||
            item.title && item.title.toLowerCase().includes(q) ||
            item.author && item.author.toLowerCase().includes(q)
        )
    })
    
            

    return <>
    <Navbar/>
    <Catagorybar/>
    
    <div className="container d-flex flex-wrap">
       {
        
        filter_products.map((item, index)=>{
            return <>
                <Link key={index} onClick={()=>dispatch({type: "set_single_product", payload: item})} className="a" to = {`/product/${item.id}`} >
                    <div  className="card" style={{width: "200px"}}>
                        <div className="card-img-top d-inline w-100">
                            <img className = "w-100" src={item.image} alt="Card image cap" />
                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">{item.model}</h5>
                            <p className="card-text">{item.type}</p>
                            <p class="card-text">&#8377;{item.price}</p>
                        </div>
                    </div> 
                </Link>           
            </>
        })

        }
        {filter_products.length==0 && (
            <>
            <div className="container text-center h4">No items...</div>
            </>
        )}
    </div>
    
    
    </>
}

export default SearchingPage;