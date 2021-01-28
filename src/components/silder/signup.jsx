import React, { Component } from 'react';
import './sign.css'
import {Link } from "react-router-dom";

class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
          username: "" ,
          email:"",
          password:""
    
        };
      
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }


     handleChange = (e) => {
      const { name, value } = e.target;
      console.log("fjrurt", { name, value });
      this.setState({ ... this.state, [name]: value });
    };

    handleSubmit = ( event)=>{
      event.preventDefault()

     var datas= this.state;
      


      let myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          datas
        }),
  
        redirect: 'follow'
      }
      fetch('www.google.com', requestOptions)
        .then(result => {
          return result.json()
        })
  
        .then(data => {
          if (data.status == 1) {
  alert("yes")
            // this.setState(
            //   {
            //     tableData: data.data[0],
            //     driverList: data.data[1],
            //     TotalPages: data.totalnumber
            //   }
            // )
          } else {
            alert("no")

          }
 
        })


      }
    render() {

      console.log("dfhgdfh",  this.state)
        return (


<React.Fragment>
{/*  Request me for a signup form or any type of help  */}
<div className="login-form">    
  <form onSubmit={this.handleSubmit}>
    {/* <div className="avatar"><i className="material-icons"></i></div> */}
    <h2>Sign Up</h2>
  





    <div className="form-group">
 <input     
       type="text"
       className="form-control"
        placeholder="username" required="required"
        defalutvalue={this.state.username}
        name="username"
        onChange={this.handleChange}/>
    </div>
<div className="form-group">
      <input 
      type="email" 
      className="form-control"
       placeholder="email" 
       required="required"
       defalutvalue={this.state.email}
       name="email"
       onChange={this.handleChange}
       />
    </div>
    <div className="form-group">
      <input type="password" 
      className="form-control" 
      placeholder="Password" 
      required="required" 
      defalutvalue={this.state.password}
       name="password"
       onChange={this.handleChange}
      
      />
    </div>
    <div className="form-group small clearfix">
      <label className="checkbox-inline"><input type="checkbox" /> Remember me</label>
      <a href="#" className="forgot-link">Forgot Password?</a>
    </div> 
    <input type="submit" className="btn btn-primary btn-block btn-lg"Value="submit" />              
  </form>			
  <div className="text-center small">Do have an account?<a href="#"> <Link to="/sign"> Sign In</Link></a></div>
</div>

</React.Fragment>
        );
    }
}


export default signup;