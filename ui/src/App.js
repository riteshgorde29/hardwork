
import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from './components/Login/Sigin/Login_component';
import SignUp from "./components/Login/Signup/Signup_component";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter,Form,Navigate,Route,Routes } from "react-router-dom";
import Addusers from "./components/Users/Addusers";
import Edit from './components/Users/Edit';
import View from "./components/Users/View";
import Search from './components/Users/Search'
import ForgotPassword from "./components/Login/Sigin/Forgot-password";
function App() {
  const isLoggedIn=window.localStorage.getItem("loggedIn")
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      <Routes  exact path="/" element={isLoggedIn =="true" ?<Navbar/>:<Login/>}> 
         <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
         <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/addusers" element ={<Addusers/>} />
          <Route path="/users/edit/:id" element={<Edit/>} />
          <Route path="/users/View/:id" element={<View/>} />
          <Route path="/users/search" element={<Search/>} />
          <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
