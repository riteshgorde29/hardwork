
import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
    <div className='py-4'>
        <h1> Contact</h1>
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
  <div className='form-floatin tm-3'>
  <input class="btn btn-primary" type="submit" value="Submit"></input>
  </div>
    </div>
    </div>
  );
}

export default Contact; 