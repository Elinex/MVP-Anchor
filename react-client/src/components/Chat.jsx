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
      text: '',
      messages: [],
    };
    this.changeText = this.changeText.bind(this);
    this.submitText = this.submitText.bind(this);
  }

  changeText(text){
    this.setState({
      text
    })
  }

  submitText(e){
    e.preventDefault();
    const { text } = this.state;

    this.setState(state => {
      return {
        messages: state.messages.concat({
          username: this.props.userName,
          createdAt: Date.now(),
          text
        }),
        text: ''
      }
    })
  }

  render(){
    const { messages } = this.state;

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
              value={this.state.text}
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