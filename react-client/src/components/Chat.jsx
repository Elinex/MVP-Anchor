import React from 'react';
import moment from 'moment';

const styles = {
  mainDiv: {
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '-webkit-fill-available',
    boxShadow: '0 0 0 1px rgba(0,0,0,.15)',
    fontSize: '0.8em',
    color: 'rgba(0,0,0,.6)',
    padding: '20px 0 10px 0',
    lineHeight: '1.6em',
    backgroundColor: '#f5f5f5',
    margin: '15px'
  },
  input: {
    width: '-webkit-fill-available',
    minHeight: '1.5rem',
    margin: '0 10px 0 10px'
  }
}

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textInput: '',
      messages: [],
      userActive: ''
    };
    this.changeText = this.changeText.bind(this);
    this.submitText = this.submitText.bind(this);
  }

  componentDidMount(){
    console.log(this.props.userName)
    this.setState({
      userActive: this.props.userName
    })
  }

  changeText(text){
    this.setState({
      textInput: text
    })
  }

  submitText(e){
    e.preventDefault();
    const text = this.state.textInput;
    console.log(this.state.userActive)
    this.setState(state => {
      return {
        messages: state.messages.concat({
          username: state.userActive,
          createdAt: Date.now(),
          text
        }),
        textInput: '',
        userActive:
          (state.userActive === this.props.userName )
          ? this.props.user.name
          : this.props.userName
      }
    })
  }

  render(){
    const { messages } = this.state;
    console.log(this.state.textInput)

    return (
      <div style={styles.mainDiv}>
        <div>
          {messages.map(message => (
            <div>
              <p>{moment(message.createdAt).format('LLL')}</p>
              <p>{message.username}: {message.text}</p>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => this.submitText(e)}>
            <input
              type='text'
              placeholder='...'
              value={this.state.value}
              onChange={(e) => this.changeText(e.target.value)}
              style={styles.input}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Chat;