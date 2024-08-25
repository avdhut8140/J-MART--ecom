import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Catagorybar from './Catagorybar';
import { useDispatch, useSelector } from 'react-redux';

function SignUp(){
  // State variables for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [success, setsuccess] = useState("");

  const dispatch = useDispatch();
  var user_data = useSelector((state)=>state.user_data)
    
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // sending user details
    dispatch({type: "add_user", payload: {
      name : name,
      user_id: email,
      pwd: password,
    }})
    
    // Reset form fields after submission
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAgree(false);
    setsuccess("Regestration successful")
    // console.log(user_data)
  };

  return (
    <>
      <Navbar />
      <Catagorybar />
      <section className="bg-light">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px', width: "100%" }}>
                  <div className="card-body px-5">
                    <h2 className="text-uppercase text-center mb-3" style={{ fontSize: '1.5rem' }}>Create an account</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example1cg" style={{ fontSize: '0.9rem' }}>Your Name</label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control "
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example3cg" style={{ fontSize: '0.9rem' }}>Your Email</label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control "
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example4cg" style={{ fontSize: '0.9rem' }}>Password</label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control "
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example4cdg" style={{ fontSize: '0.9rem' }}>Repeat your password</label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-check d-flex justify-content-center mb-2">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="form2Example3cg"
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="form2Example3cg" style={{ fontSize: '0.9rem' }}>
                          I agree to all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block gradient-custom-4 text-body">
                          <span style={{color: "white"}}>Regester</span>
                        </button>
                      </div>
                      <p className="text-center text-muted mt-3" style={{ fontSize: '0.9rem' }}>
                        Already have an account?
                        <Link to='/login'>
                          <u className="fw-bold text-body">Login here</u>
                        </Link>
                      </p>
                      <p className="text-success text-center">{success}</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default SignUp;
