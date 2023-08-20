import React from 'react';
import {useState,useEffect } from "react";
import axios from 'axios';

const Search = () =>{
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/searchStudent');
        setSearchData(response.data);
      } catch (error) {
        console.error('Error retrieving search data:', error);
      }
    };
    fetchData();
  }, []);
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = searchData.filter(item =>
    item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.age.toString().includes(searchTerm)
  );

   return (
    <div>
     <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      <button type="button" onClick={handleSearch}>Search</button> 
      
      <div className=" border shadow">
      <table className="table border shadow">
      <thead>
    <tr className='text-bg-dark p-3'>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">age</th>
    </tr>
  </thead>
  <tbody>
        {filteredData.map(item => (
          <tr key={item.id}>
           <td>{item.firstName} </td>
           <td>{item.lastName}</td>
           <td>  {item.age}</td>
          </tr>
        ))}
    </tbody>
      </table>
      </div>
  </div>
  );
 
}

export default Search