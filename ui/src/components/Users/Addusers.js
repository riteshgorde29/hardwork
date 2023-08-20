import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Addusers=()=> {

    const [inputData,setInputData]=useState({
      firstName:"", lastName:"",age:""});
      let navigate=useNavigate();
    const { firstName,lastName,age}=inputData;
  const handleData=(e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
  }; 

  const handleSubmit=async(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/student-info",inputData)
    .then ((response)=>{
      console.log(response)
    })
    navigate('/home');
  };
  const handleBack = () => {
    navigate('/home');
  };

  return (

    <div> <h1>Addusers </h1>
  <form className='form' >
  <div className="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" name='firstName' value={firstName} onChange={handleData} required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" name='lastName' value={lastName} onChange={handleData} required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault03" class="form-label">age</label>
    <input type="text" class="form-control" name='age' value={age} onChange={handleData} required/>
  </div>
  
  <div className="col-12">
  <button className= "btn btn-dark" onClick={handleBack}>Back</button>
  <button onClick={handleSubmit} className="btn btn-primary" type="submit">Addusers</button>
  </div>
</form>
    </div>
  )
}
export default Addusers;