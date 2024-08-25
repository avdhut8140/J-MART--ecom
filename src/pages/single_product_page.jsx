import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Catagorybar from "../components/Catagorybar";


function SingleProductPage() {
    const dispatch = useDispatch();
    const data = useSelector((state)=> state)
    const product = data.single_product;
    
    
    // console.log(product)
    return <>
    <Navbar/>
    <Catagorybar/>
    
    <div className="single-product container d-flex justify-content-center">

        <div  className="card" 
        >
            <div className="card-img-top d-inline w-100">
                <img className = "w-100" src={product.image} alt="Card image" />
            </div>
            
            <div class="card-body">
                <h5 class="card-title">{product.model}</h5>
                <p class="card-text">&#8377; {product.price}</p>
            </div>
        </div>

        <span className="p-5">
            <h5 class="card-title">{product.model}, {product.category}</h5>
            <p>{product.brand}</p>
    
            <p><b>{product.type}</b>  <br />{product.description}</p>
            <p class="card-text">&#x20B9; {product.price}</p>

            <div  onClick = {()=>alert("under some working.....")} className="btn btn-success">Buy Now</div>
            <br />
            <br />
            <div className="btn btn-dark"
                onClick={()=>{
                    dispatch({ type: "add_to_cart", payload: product
                })
            
                }}>Add to cart</div>

        </span>
    </div>

    
    </>
}

export default SingleProductPage;