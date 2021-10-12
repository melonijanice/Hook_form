import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HookForms=(props)=>{
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [fnameerror, setfnameerror] = useState("");
    const [lnameerror, setlnameerror] = useState("");
    const [emailerror, setemailerror] = useState("");
    const [passworderror, setpassworderror] = useState("");
    const [cpassworderror, setcpassworderror] = useState("");
    const handleFname=(e)=>{
        setfname(e.target.value);
        if(e.target.value.length<2){
            setfnameerror("First Name has to be greater than 2 characters")
        }
         else {
        // an empty string is considered a "falsy" value
        setfnameerror("");
        }
    }
    const handleLname=(e)=>{
        setlname(e.target.value);
        if(e.target.value.length<2){
            setlnameerror("Last Name has to be greater than 2 characters")
        }
         else {
        // an empty string is considered a "falsy" value
        setlnameerror("");
        }
    }
    const handleemail=(e)=>{
        setemail(e.target.value);
        if(e.target.value.length<5){
            setemailerror("Email has to be greater than 5 characters")
        }
         else {
        // an empty string is considered a "falsy" value
        setemailerror("");
        }
    }
    const handlepassword=(e)=>{
        setpassword(e.target.value);
        if(e.target.value.length<8){
            setpassworderror("Password has to be greater than 8 characters")
        }
         else {
        // an empty string is considered a "falsy" value
        setpassworderror("");
        }
       
    }
    const handlecpassword=(e)=>{
        setcpassword(e.target.value);
        if(password!==e.target.value)
        {
            setcpassworderror("Passwords dont match")
        }
         else {
        // an empty string is considered a "falsy" value
        setcpassworderror("");
        }
       
    }
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { fname, lname, email,password,cpassword };

        console.log("Welcome", newUser);
    };
    return(<div><form onSubmit={ createUser }>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" onChange={ handleFname }/>
        <p>{fnameerror}</p>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" onChange={ handleLname }/>
        <p>{lnameerror}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="email" class="form-control" placeholder="E-mail" onChange={ handleemail}/>
        <p>{emailerror}</p>
      </div>
      <div class="col">
        <input type="password" class="form-control" placeholder="Password" onChange={ handlepassword }/>
        <p>{passworderror}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="password" class="form-control" placeholder="Confirm Password" onChange={ handlecpassword }/>
        <p>{cpassworderror}</p>
      </div>
    </div>
  </form>
  <div>
  <h3>Your Form Data</h3>
  <p>
    <label>First Name: </label>{ fname }
  </p>
  <p>
    <label>Last Name: </label>{ lname }
  </p>
  <p>
    <label>Email: </label>{ email }
  </p>
  <p>
    <label>Password: </label>{ password }
  </p>
  <p>
    <label>Confirm Password: </label>{ cpassword }
  </p>
</div>
</div>
  );}
  export default HookForms;