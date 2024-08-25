
import { Link } from "react-router-dom";
import { womanData } from "../data/woman";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Catagorybar from "../components/Catagorybar";
import { useDispatch } from "react-redux";

function WomensPage() {

    const dispatch = useDispatch();

    const [filterProduct, setfilterProduct] = useState([])
    const [show_filters, setshow_filters] = useState(false)

    const catagoryHandler = (catagory_name)=>{
        if (filterProduct.includes(catagory_name)){
            setfilterProduct(filterProduct.filter(field => field != catagory_name))

        }
        else{
            setfilterProduct([...filterProduct, catagory_name])
        }
    }
    const filterProducts = filterProduct.length ==0 ?
    womanData : womanData.filter((item)=> filterProduct.includes(item.type))
    return <>
    <Navbar/><Catagorybar/>
    <div className="pages container-fluid d-flex">
    <span onClick={()=>setshow_filters( show_filters ? false : true)} className="filter-symbol">
            <i>filter</i><i class="fa-solid fa-angle-down"></i>
        </span>
        { show_filters && <>
            <div className="filter-products-mobile">
            {
                womanData.map((item)=>{ return <>
                <div className="uday">
                <label >
                    <input type="checkbox"
                        checked = {filterProduct.includes(item.type)}
                        onChange={()=>catagoryHandler(item.type)} 
                    />
                                    
                    {item.type}
                </label>
                
                </div>
                </>
                })
            }
            </div>
        </>}


    <div className="container filter-products border w-25">
        {
            womanData.map((item)=>{
                return <>
                <div>   
                    <label htmlFor="">

                        <input type="checkbox"
                            checked = { filterProduct.includes(item.type)}
                            onChange={ ()=>catagoryHandler(item.type)}
                             name="" id="" />
                        {item.type}
                    </label>
                </div>
                
                </>
            })
        }

    </div>
    <div className="w-100 d-flex flex-wrap gap-4">
        {
            filterProducts.map((item)=>{
                return <>
                <Link onClick={()=> dispatch({type: 'set_single_product', payload: item}) } 
                    className = 'a' to={`/product/${item.id}`} >
                    <div class="card" style={{width: "200px"}}>
                        <div className="card-img-top d-inline w-100">
                            <img className = "w-100" src={item.image} alt="Card image cap" />

                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">{item.model}</h5>
                            <p class="card-text">&#8377; {item.price}</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
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

export default WomensPage;