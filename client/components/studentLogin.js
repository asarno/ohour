// create a form component
// are  you a student? or professor? redirect accordingly
//students go to student login page
//professor goes to professor login page

//if there is no active session, redirect to no office hours

import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.submitInfo = this.submitInfo.bind(this);
  }

  submitInfo(event) {
    event.preventDefault();
    const email = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    fetch('/submit', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(() => browserHistory.push('/queue'))
      .catch(() => browserHistory.push('*'));
  }

  render() {
    return (
    <form onSubmit={this.submitInfo}>
      
      <div className="form-group">
        <input type="text" name="email" className="form-control" placeholder="Student Email"></input>
      </div>
        
      <div className="form-group">
        <input type="text" name="password" className="form-control" placeholder="Password"></input>
      </div>
        
      <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
    </form>
    )
  }
}

export default StudentLogin