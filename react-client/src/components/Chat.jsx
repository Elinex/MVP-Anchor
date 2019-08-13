import React from 'react';

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
    margin: '0 10px 0 10px'
  }
}

const Chat = ({}) => {
  return (
    <div style={styles.mainDiv}>
      <div>
        Start your conversarion here
      </div>
      <div>
        <input type='text' placeholder='...' style={styles.input}/>
      </div>

    </div>
  )
}

export default Chat;