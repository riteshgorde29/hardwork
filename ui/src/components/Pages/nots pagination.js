
import React,{useState,useEffect}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () => { 
 const [student, setStudent] = useState([]);
 const [deleteSuccess,setDeleteSuccess]=useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalPages, setTotalPages] = useState(5);
useEffect(()=>{
  loadUsers();
}, [currentPage,deleteSuccess]);
const loadUsers=async()=>{
  const result = await axios.get(`http://localhost:3001/pagination?page=${currentPage}`);
  setStudent(result.data);
  setTotalPages(result.data.totalPages);
};
const deleteStudent = async (id) =>{
  if (window.confirm('Are you sure you want to delete this student?'))
  await axios.delete(`http://localhost:3001/student-info/${id}`);
  setDeleteSuccess(true);
  setTimeout(() => {
    setDeleteSuccess(false);
  }, 3000);
};
const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

const handleNextPage = () => {
  setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};
  return (
    <div className="container">
    <div className="py-4">
        <h1> Student Details  </h1>
        {deleteSuccess && (
         <div class="alert alert-success" role="alert">
        Deleted successfully!
       </div>
        )}
        
      <div className=" border shadow">
      <table className="table border shadow">
  <thead>
    <tr className='text-bg-dark p-3'>
      <th scope="col">index</th>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">age</th>
      <th> Action</th>
    </tr>
  </thead>
  <tbody>
   { 
   student.map((student,index)=>{
   return <tr>
    <th scope="row"> {index +1}</th>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.age}</td>
      <td>
        <Link className='btn btn-primary mr-2' exact to={"/users/view/"+student._id}>View</Link>
        <Link className='btn btn-outline-primary mr-2'exact to={"/users/edit/"+student._id} >Edit</Link>
        <button className='btn btn-danger mr-2 ' onClick={() => deleteStudent(student._id)} >Delete</button>
        </td>
    </tr>
   })

   }
  </tbody>
</table>
      </div>
      <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      
      <button onClick={handlePrevPage} disabled={currentPage === 1}type="button" class="btn btn-primary">Previous</button>
    </li>
    <li class="page-item"><a class="page-link" >1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" >2</a>
    </li>
    <li class="page-item"><a class="page-link">3</a></li>
    <li class="page-item">
    <button onClick={handleNextPage} disabled={currentPage === totalPages} type="button" class="btn btn-primary">Next</button>
   
    </li>
  </ul>
</nav>
    </div>
    </div>
  );
}

export default Home;