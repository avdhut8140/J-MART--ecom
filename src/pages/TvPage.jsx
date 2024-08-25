
import { Link } from "react-router-dom";
import { menData } from "../data/men";
import {useDispatch, useSelector} from "react-redux"

import { useState } from "react";
import { tvData } from "../data/tv";
import Navbar from "../components/Navbar";
import Catagorybar from "../components/Catagorybar";
function TvPage() {
    const dispatch = useDispatch();
  
    const [filterProduct, setfilterProduct] = useState([]);
    const [show_filters, setshow_filters] = useState(false)

    
    const companyHandler = (catagory_name)=>{
        if( filterProduct.includes(catagory_name)){
            setfilterProduct( filterProduct.filter(field=>field != catagory_name ))
        }else{
            setfilterProduct([...filterProduct, catagory_name])
        }
    }

    const filterProducts = filterProduct.length==0 ? 
    tvData: tvData.filter((item)=> filterProduct.includes(item.brand)) 

    return <>
    <Navbar/><Catagorybar/>
    <div className="pages container-fluid d-flex">
    <span onClick={()=>setshow_filters( show_filters ? false : true)} className="filter-symbol">
            <i>filter</i><i class="fa-solid fa-angle-down"></i>
        </span>
        { show_filters && <>
            <div className="filter-products-mobile">
            {
                tvData.map((item)=>{ return <>
                <div className="uday">
                <label >
                    <input type="checkbox"
                        checked = {filterProduct.includes(item.brand)}
                        onChange={()=>companyHandler(item.brand)} 
                    />
                                    
                    {item.brand}
                </label>
                
                </div>
                </>
                })
            }
            </div>
        </>}
    {/* for filtering */}
    <div className="container filter-products border w-25">
        {
            tvData.map((item)=>{ return <>
            <div key={item.id}>
            <label >
                <input type="checkbox" 
                    checked = {filterProduct.includes(item.brand)}
                    onChange={()=>companyHandler(item.brand)} 
                />
                                
                {item.brand}
            </label>
            
            </div>
            </>
            })
        }
    </div>

    <div className="w-100 d-flex flex-wrap px-4 gap-2">
        {
            filterProducts.map((item)=>{
                
                return <>
                <Link  key = {item.id} onClick={()=> dispatch({type: 'set_single_product', payload: item}) } 
                    className = 'a' to={`/product/${item.id}`} >
                    <div  className="card" style={{width: "200px"}}>
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

export default TvPage;