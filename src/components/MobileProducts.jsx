import { Link } from "react-router-dom";
import { mobileData } from "../data/mobiles";
import { useDispatch } from "react-redux";

function MobileProducts() {
    const dispatch = useDispatch();
    return <>

<div className="container-fluid mt-5 bg-light">
<div className="px-4 container-fluid d-flex justify-content-between">
        <div className="h4">Mobiles</div>
        <Link to = '/mobilespage'>
            More items..
        </Link>
    </div>
     <div className="d-flex justify-content-around flex-wrap">
        {
            mobileData.slice(0,5).map((item)=>{
                return <>
                    <Link onClick={()=>dispatch({type: "set_single_product", payload: item}) } className="a" to={`/product/${item.id}`}>
                    <div class="card bg-light" style={{width: "200px"}}>
                        <div className="card-img-top d-inline w-100">
                            <img className = "w-100" src={item.image} alt="Card image cap" />
                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">{item.model}</h5>
                            <p class="card-text">&#8377; {item.price}</p>
                        </div>
                    </div>
                </Link>
                </>
            })
        }
    </div>

    </div>
    </>
}

export default MobileProducts;