import React from 'react';
import $ from 'jquery';

const styles = {
  form: {
    margin: '20px',
    display: 'inline-flex',
    flexDirection: 'column',
  }
}

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: null,
      avatar: null,
      emaiL: null,
      city: null,
      zipcode: null,
      state: null,
      level: null,
      preferCategory: null,
      preferClimb: null,
      climbSince: null
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

    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:3000/api/login',
    //   data
    // })
    // .done(function() {
    //   changeView('showClimbers');
    //   handleLogin();
    // });
  }

  render(){
    const inputData = {
      name: text,
      avatar: image,
      email,
      password,
      city: text,
      zipcode: number,
      state: text,
      level: checkbox,
      preferCategory: checkbox,
      preferClimb: checkbox,
      climbSince: date
    };

    const select = {
      level: ['beginner','intermediate','advanced'],
      preferCategory: ['bouldering','free solo','sport climbing','roped climbing', 'traditional climbing'],
      preferClimb: ['indoor','outdoor','anywhere'],
    }

    return (
      <form onSubmit={(e) => this.submitText(e)} style={styles.form}>
        {Object.keys(inputData).map(key => {
          if(inputData[key] === 'checkbox'){
            // return (
            //   <React.Fragment>
            //     {Object.keys(select[key]).map(option => (
            //       <
            //       <input type="checkbox" id="coding" name="interest" value="coding">
            //       <label for="coding">Coding</label>
            //     ))}
            //   </React.Fragment>
            // )
          }
          else {
            return(
              <input
                type={key}
                placeholder={key}
                name={key}
                required
                value={this.state[key]}
                onChange={(e) => this.changeText(e.target.name, e.target.value)}
              />
            )
          }
        })}

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

export default Signup;