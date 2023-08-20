import React, {  useState } from "react";
export default function ForgotPassword () {
  const [email, setEmail] = useState("");

 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
    
    fetch("http://localhost:3001/forgot-password",{
        method:"POST",
        crossDomain:true,
        headers:{
       "Content-Type":"application/json",
        Accept:"application/json",
       "Access-Control-Aollow-origin":"*",
        },
        body : JSON.stringify({
          email:email,
        }),
    })
    .then(res => res.json())
    .then((data)=>{
        console.log( data,'LoginSignUp');
        alert(data.status);
    });
    };
  
  return (
   
     <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Reset Your Password</h3>
          <div className="mb-3">
            <label>Enter Your Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
          <a href="/SignUp">SignUp</a> 
          </p>
        </form>
      </div>
    </div>
  );
}