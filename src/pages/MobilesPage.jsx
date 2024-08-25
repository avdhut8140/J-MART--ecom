
import { Link } from "react-router-dom";
import { menData } from "../data/men";
import {useDispatch, useSelector} from "react-redux"

import { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navbar from "../components/Navbar";
import Catagorybar from "../components/Catagorybar";
function MobilesPage() {
    const dispatch = useDispatch()
    // const enableitem = useSelector((state)=>state)
    const [context, setcontext] = useState(false)
    
    const [filterProduct, setfilterProduct] = useState([]);
    const [show_filters, setshow_filters] = useState(false)

    
    const companyHandler = (catagory_name)=>{
        if( filterProduct.includes(catagory_name)){
            setfilterProduct( filterProduct.filter(field=>field != catagory_name ))
        }else{
            setfilterProduct([...filterProduct, catagory_name])
        }
    }

    const filterProducts = filterProduct.length==0 ? mobileData: mobileData.filter((item)=> filterProduct.includes(item.company)) 

    return <>
    <Navbar/><Catagorybar/>
    <div className="container-fluid  pages d-flex">
    <span onClick={()=>setshow_filters( show_filters ? false : true)} className="filter-symbol">
            <i>filter</i><i class="fa-solid fa-angle-down"></i>
        </span>
        { show_filters && <>
            <div className="filter-products-mobile">
            {
                mobileData.map((item)=>{ return <>
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
        </>}
    {/* for filtering */}
    <div className="container filter-products border w-25">

        {
            mobileData.map((item)=>{ return <>
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
                    <div  className="card" style={{width: "200px"}}>
                        <div className="card-img-top d-inline w-100">
                            <img className = "w-100" src={item.image} alt="Card image cap" />
                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">{item.model}</h5>
                            <b>{item.company}</b> <br /> 

                            <p class="card-text"> &#8377; {item.price}</p>
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

export default MobilesPage;