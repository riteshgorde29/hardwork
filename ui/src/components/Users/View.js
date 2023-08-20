import React from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useEffect,useState} from 'react'

const View =()=>{
  const {id}=useParams();
const navigate=useNavigate();
  const [viewData,setViewData]=useState({firstName:'',lastName:"",age:""});
const{firstName,lastName,age}=viewData

useEffect(()=>{
  loadUsers();
},[]);
const loadUsers = async()=>{
  try {
    const response = await axios.get(`http://localhost:3001/student-info/${id}`);
    setViewData(response.data);
  } catch (error) {
    console.error(error);
  }
};
const handleBack = () => {
  navigate('/home');
};

  return (
    <div>
     
    <h2>Student Information</h2>
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
             name="firstName"
           value={firstName}         
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"

             name="lastName"
            value={lastName}
            
            required
          />
        </div>
  
        <div className="form-group col-md-6">
          <label for="age">Age</label>
          <input
            type="number"
            className="form-control"
            name="age" 
            value={age} 
            placeholder="Age"
            required
          />
        </div>
      </div>
    </form>
    <button className= "btn btn-dark" onClick={handleBack}>Back</button>
  </div>
  )
}

export default View