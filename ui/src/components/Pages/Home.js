
import React,{useState,useEffect}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useRef } from "react";
import ReactPaginate from 'react-paginate'

const Home = () => { 
 const [student, setStudent] = useState([]);
 const [deleteSuccess,setDeleteSuccess]=useState(false);
 const [limit,setLimit]= useState(5)
 const [pageCount,setPageCount]=useState(1)
const currentPage=useRef(); 

useEffect(()=>{
 currentPage.current=+1;
 loadUsers();
  getPaginationStudent();
}, [deleteSuccess]);

//all student
const loadUsers=async()=>{
  const results = await axios.get(`http://localhost:3001/student-info`);
  setStudent(results.data);
};
const deleteStudent = async (id) =>{
  if (window.confirm('Are you sure you want to delete this student?'))
  await axios.delete(`http://localhost:3001/student-info/${id}`);
  setDeleteSuccess(true);
  setTimeout(() => {
    setDeleteSuccess(false);
  }, 3000);
};

function handlePageClick(e) {
  console.log(e)
  currentPage.current=e.selected+1;
  getPaginationStudent();
}
//pagination 

  function getPaginationStudent(){
    fetch(`http://localhost:3001/paginationStudent?page=${currentPage.current}&limit=${limit}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((student) => {
        console.log(student, "studentData");
        setPageCount(student.pageCount);
        setStudent(student.result);
      });
}
const logOut = () => {
  window.localStorage.clear() ;
  window.location.href = "./login";
}
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
<ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
      <button  onClick={logOut} class="btn btn-primary" >logout</button>
      </div>
    </div>
    </div>
  );
}

export default Home