
import { Link } from "react-router-dom";
import { menData } from "../data/men";
import {useDispatch, useSelector} from "react-redux"
import '../App.css'

import { useState } from "react";
import Navbar from "../components/Navbar";
import Catagorybar from "../components/Catagorybar";
function MensPage() {
    const dispatch = useDispatch();
    // const single_product = useSelector((state)=>state.single_product)
    // console.log(single_product)
    const [filterProduct, setfilterProduct] = useState([]);
    const [show_filters, setshow_filters] = useState(false)
    
    const companyHandler = (catagory_name)=>{
        if( filterProduct.includes(catagory_name)){
            setfilterProduct( filterProduct.filter(field=>field != catagory_name ))
        }else{
            setfilterProduct([...filterProduct, catagory_name])
        }
    }

    const filterProducts = filterProduct.length==0 ? menData: menData.filter((item)=> filterProduct.includes(item.type)) 
    
    return <>
    
    <Navbar/><Catagorybar/> 

    <div className="container-fluid pages d-flex justify-content-center">
    {/* for filtering */}

        <span onClick={()=>setshow_filters( show_filters ? false : true)} className="filter-symbol">
            <i>filter</i><i class="fa-solid fa-angle-down"></i>
        </span>
        { show_filters && <>
            <div className="filter-products-mobile">
            {
                menData.map((item)=>{ return <>
                <div className="uday">
                <label >
                    <input type="checkbox"
                        checked = {filterProduct.includes(item.type)}
                        onChange={()=>companyHandler(item.type)} 
                    />
                                    
                    {item.type}
                </label>
                
                </div>
                </>
                })
            }
            </div>
        </>

        }
        

        <div className="container filter-products border">
            {
                menData.map((item)=>{ return <>
                <div className="uday">
                <label >
                    <input type="checkbox" 
                        checked = {filterProduct.includes(item.type)}
                        onChange={()=>companyHandler(item.type)} 
                    />
                                    
                    {item.type}
                </label>
                
                </div>
                </>
                })
            }
        </div>

        <div className="w-100 d-flex flex-wrap gap-4 ">
            {
                filterProducts.map((item)=>{
                    
                    return <>
                    <Link onClick={()=> dispatch({type: 'set_single_product', payload: item}) } 
                        className = 'a' to={`/product/${item.id}`} >
                        <div  className="card" style={{width: "200px"}}>
                            <div className="card-img-top d-inline w-100">
                                <img className = "w-100" src={item.image} alt="Card image cap" />
                            </div>
                            
                            <div class="card-body d-inline">
                                <h5 class="card-title">{item.model}</h5>
                                <b>{item.brand}</b> 
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

export default MensPage;