import React, { useState, useEffect, createContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Catagorybar from './Catagorybar';
import { useDispatch, useSelector } from 'react-redux';



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user_data = useSelector((state)=>state.user_data)
  
  // const [display_user_name, setdisplay_user_name] = useState("")

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [user_id, setuser_id] = useState("")
  const [pwd, setpwd] = useState("")
  const [danger_outline, setdanger_outline] = useState(false)

  
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(user_data)
    var user = user_data.filter((user)=>{
      return user.user_id == user_id && user.password == pwd
    })
    // console.log(user_data)
    // console.log(user)
    if ( user.length == 0){
      setdanger_outline(true)

    }
    else{
      user = user[0]

      dispatch( {type: 'set_user_name', payload: user.user_name})
        setShouldRedirect(true)
    }
  };

  useEffect(() => {
    if (shouldRedirect) {
      // Reload the page after 2 seconds
      setTimeout(() => {
        navigate('/home');
      }, 2000);

    }
  }, [shouldRedirect, navigate]);


  return (
    <>
      <Navbar />
      <Catagorybar />
      <section className="w-100">
        <div className="container  w-100 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-8">
              <div className="card " style={{ borderRadius: '1rem' , width: "100%"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 text-black">
                      <form onSubmit={handleLogin}>
                        <div className="d-flex align-items-center">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: '#ff6219' }}
                          ></i>
                          <span className="h2 fw-bold mb-0">Shop with us</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: '1px' }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                          <input
                            type="text"
                            id="form2Example17"
                            className={danger_outline ? 'form-control border border-danger' : 'form-control'}
                            value={user_id}
                            onChange={(e)=>setuser_id(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            className={danger_outline ? 'form-control border border-danger' : 'form-control'}
                            value={pwd}
                            onChange={(e)=>setpwd(e.target.value)}
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-dark d-block">
                          Login
                        </button>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-1 pb-lg-2" style={{ color: '#393f81' }}>
                          Don't have an account?{' '}
                          <Link to="/signup">Register here</Link>
                        </p>
                        <a href="#" className="small text-muted">
                          Terms of use. Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
