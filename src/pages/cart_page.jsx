import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Catagorybar from "../components/Catagorybar";

function CartPage() {
    // const [total, settotal] = useState(1)
    var totalamount = 0;

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=>state.cart)
    return <>
    <Navbar/><Catagorybar/>
    <div className="container-fluid" style={{ minHeight: "100vh"}}>

    
     { cartItems.length ==0 && <div className="text-center h1 ">cart is empty</div> 
    }

    { cartItems.map((item)=>{
        {totalamount += +item.price}
        return (
            <>
            <div className="container single-product d-flex my-5" >
                <div  className="card" 
                // style={{width: "200px"}}
                >
                    <div className="card-img-top d-inline w-100">
                        <img className = "w-100" src={item.image} alt="Card image cap" />
                    </div>
                    
                    <div class="card-body">
                        <h5 class="card-title">{item.model}</h5>
                        <p class="card-text">{item.price}</p>
                    </div>
                </div>

                <span className="p-5">
                    <h5 class="card-title">{item.model}, {item.category}</h5>
                    <p>{item.brand}</p>

                    <p><b>{item.type}</b>  <br />{item.description}</p>
                    <p class="card-text">&#x20B9; {item.price}</p>

                    <div  onClick = {()=>alert("under some working.....")} className="btn btn-success">Buy Now</div>
                <br />
                <br />

                    <div className="btn btn-danger"
                        onClick={()=>{
                            dispatch({type: 'remove_from_cart', payload: item})
                        }}
                    
                    >Remove</div>
                </span>
            </div>
        </>
        )
        

        })
    }
    <div className="total-amount-section text-center">
        <p>Total Amount = &#x20B9; {totalamount}</p>
        <button className="btn btn-success"
            onClick={()=>{
                alert("under some working please wait..............")
            }}>Buy all products</button>
        
    </div>
    
    </div>

    
 </>
}

export default CartPage;