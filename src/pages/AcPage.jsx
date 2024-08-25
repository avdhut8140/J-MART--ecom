
import { Link } from "react-router-dom";
import { menData } from "../data/men";
import { acData } from "../data/ac";
import {useDispatch, useSelector} from "react-redux"

import { useState } from "react";
import Catagorybar from "../components/Catagorybar";
import Navbar from "../components/Navbar";
function AcPage() {
    const dispatch = useDispatch()
    
    const [filterProduct, setfilterProduct] = useState([]);
    const [show_filters, setshow_filters] = useState(false)

    
    const companyHandler = (catagory_name)=>{
        if( filterProduct.includes(catagory_name)){
            setfilterProduct( filterProduct.filter(field=>field != catagory_name ))
        }else{
            setfilterProduct([...filterProduct, catagory_name])
        }
    }

    const filterProducts = filterProduct.length==0 ? acData: acData.filter((item)=> filterProduct.includes(item.company)) 

    return <>
    <Navbar/>
    <Catagorybar/>
    <div className="container-fluid pages d-flex justify-content-center">
    <span onClick={()=>setshow_filters( show_filters ? false : true)} className="filter-symbol">
            <i>filter</i><i class="fa-solid fa-angle-down"></i>
        </span>
        { show_filters && <>
            <div className="filter-products-mobile">
            {
                acData.map((item)=>{ return <>
                <div className="uday">
                <label >
                    <input type="checkbox"
                        checked = {filterProduct.includes(item.company)}
                        onChange={()=>companyHandler(item.company)} 
                    />
                                    
                    {item.company}
                </label>
                
                </div>
                </>
                })
            }
        </div>
        </>

        }

    {/* for filtering */}
    <div className="container filter-products border">

        {
            acData.map((item)=>{ return <>
            <div>
            <label >
                <input type="checkbox" 
                    checked = {filterProduct.includes(item.company)}
                    onChange={()=>companyHandler(item.company)} 
                />
                                
                {item.company}
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
                    <div  className="card" style={{width: "240px"}}>
                        <div className="card-img-top d-inline w-100">
                            <img className = "w-100" src={item.image} alt="Card image cap" />
                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">{item.product}</h5>
                            <p className="card-text">
                                <b>{item.company}</b>
                                <br />
                                {item.model}
                            </p>
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

export default AcPage;