import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const user_data = useSelector((state)=>state.user_data)
  const display_user_name = useSelector((state)=> state.display_user_name)
  const [query, setQuery] = useState('');

  

  // const isLandingPage = location.pathname === '/home';
  const isLandingPage = display_user_name.length!==0;

  const handle_logout = ()=>{
    dispatch({ type: "set_user_name", payload: ""})
    // console.log(display_user_name)
  }

  return <>

    <div className="nav-bar bg-light p-2 px-4 d-flex justify-content-between flex-wrap">

      <div className="nav-left d-flex justify-content-between flex-wrap">
          <Link className="navbar-brand" to="/">
            <div className="main-title h3">J Shop</div>
          </Link>

          <div className="buttons-mobile">

          
        {isLandingPage ? (
            <>       
            <span className='p-2 normal-font-size'>Welcome {display_user_name}</span>    
              <Link to="/">
              <button onClick={()=>handle_logout()} className="btn btn-outline-danger me-2" type="button">
                Log out
              </button>
            </Link>

            </>

            
          ) : (
            <Link to="/login">
                <button className="login btn btn-outline-primary me-2" type="button">
                  Login
                </button>
              </Link>
            
          )}
              <Link to="/cartpage">
            <button className="login btn position-relative" type="button">
              <i className="cart-logo fa-solid fa-cart-shopping"
                style={{fontSize:"20px"}}></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">items in cart</span>
              </span>
            </button>
          </Link>
        {/* </div> */}




            {/* <Link to="/login">
                  <button className="login btn btn-outline-primary me-2" type="button">
                    Login
                  </button>
                </Link>
                <Link to="/cartpage">
            <button className="login btn btn-outline-success position-relative" type="button">
              <i className="cart-logo fa-solid fa-cart-shopping"></i> Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">items in cart</span>
              </span>
            </button>
          </Link> */}
          </div>
      </div>
      <div className="nav-right d-flex justify-content-between">
      {/* <form> */}
        <form className="search-container rounded border d-flex">
          <input type="text"
            className="search-box p-2"
            value={query}
            // type="search"
            onChange={(e) => setQuery(e.target.value)}
            
            placeholder='search for products'
          />
          <Link to={`/search/${query}`}>
              <button className="search-btn btn btn-default" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </Link>

        </form>
        {/* </form> */}
        <div className="buttons">
        {isLandingPage ? (
            <>       
            <span className='p-2 normal-font-size'>Welcome {display_user_name}</span>    
              <Link to="/">
              <button onClick={()=>handle_logout()} className="btn btn-outline-danger me-2" type="button">
                Log out
              </button>
            </Link>

            </>

            
          ) : (
            <>
            <Link to="/login">
                <button className="login btn btn-outline-primary me-2" type="button">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="signup btn btn-outline-secondary me-2" type="button">
                  Sign Up
                </button>
              </Link>
              </>
            
          )}
              <Link to="/cartpage">
            <button className="login btn btn-outline-success position-relative" type="button">
              <i className="cart-logo fa-solid fa-cart-shopping"></i> Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">items in cart</span>
              </span>
            </button>
          </Link>
        </div>

      </div>
    </div>
    </>
};

export default Navbar;
