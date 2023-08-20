
import React from "react";
import Axios from "axios";
import { useState, useEffect} from "react";
import {useNavigate}from 'react-router-dom';
import {useParams} from "react-router-dom";


const Edit = () => {
  const { id } = useParams();
const navigate=useNavigate();
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    age: ""
   
  });
  const { firstName, lastName, age} = inputData;

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers = async()=>{
    try {
      const response = await Axios.get(`http://localhost:3001/student-info/${id}`);
      setInputData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(`http://localhost:3001/student-info/${id}`, inputData);
      console.log("Data updated successfully");
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
             onChange={handleData} 
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
              onChange={handleData}
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
              onChange={handleData} 
              placeholder="Age"
              required
            />
          </div>
        </div>
        <button className= "btn btn-dark" onClick={handleBack}>Back</button>
        <button onClick={handleSubmit} type="submit" className="btn btn-warning btn-block">
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default  Edit;
