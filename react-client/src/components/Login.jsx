import React from 'react';
import $ from 'jquery';

const styles = {
  form: {
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
  }
}

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.changeText = this.changeText.bind(this);
    this.submitText = this.submitText.bind(this);
  }

  changeText(name, value){
    this.setState({
      [name]: value
    })
  }

  submitText(e){
    e.preventDefault();
    const changeView = this.props.changeView;
    const handleLogin = this.props.handleLogin;
    const data = this.state;

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/login',
      data
    })
    .done(function() {
      changeView('showClimbers');
      handleLogin();
    });
  }

  render(){
    return (
      <form onSubmit={(e) => this.submitText(e)} style={styles.form}>
        <input
          type='email'
          placeholder='Email'
          name='email'
          required
          value={this.state.email}
          onChange={(e) => this.changeText(e.target.name, e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
          minLength='8'
          maxLength='20'
          value={this.state.password}
          onChange={(e) => this.changeText(e.target.name, e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default Login;