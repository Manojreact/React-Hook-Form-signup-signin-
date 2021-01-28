import React from "react";
import { useForm } from "react-hook-form";
import {Link } from "react-router-dom";

export default function SignApp() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data,"gdgsd");

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <React.Fragment>
    <div className="login-form">    
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input type="text" className="form-control"name="example"  ref={register({ required: true })}  placeholder="Username"  />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" name="exampleRequired" ref={register({ required: true })}/>
        </div>
        <div className="form-group small clearfix">
          <label className="checkbox-inline"><input type="checkbox" /> Remember me</label>
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div> 
        <input type="submit" className="btn btn-primary btn-block btn-lg" defaultValue="Login" />              
      </form>			
      <div className="text-center small">Don't have an account? <a href="#"><Link to="/signup"> Sign Up</Link></a></div>
      {errors.exampleRequired && <span >This field is required</span>}

    </div>
    
    </React.Fragment>
  );
}