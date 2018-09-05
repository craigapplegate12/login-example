import React, {Component} from 'react';
import { authenticateUser } from '../data/data-service';
import './login.css';



class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  
  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({[key]: value})
  }

  handleClick = () => {
    const id = authenticateUser(this.state.email, this.state.password) ;
    if (id) return this.props.history.push(`/home/${id}`);
    return console.log('user does not exist');
  }

  render() {

    return (
      <div className="login-wrapper"> 
      <div className="login-logo"> </div>
      <input name='email' value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
      <input name='password' value={this.state.password} onChange={this.handleChange} placeholder="Password" type ="password"/> 
      <div className="login-submit" onClick={this.handleClick}> Sissy that walk </div>

      </div>
    )
  }
}
export default Login;