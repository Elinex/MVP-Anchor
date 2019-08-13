import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import users from './mockData.js';
import IoAndroidHand from 'react-icons/lib/io/android-hand';

import List from './components/List.jsx';
import Item from './components/Item.jsx';
import Chat from './components/Chat.jsx';

const styles = {
  mainDiv: {
    fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif',
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#665ed0'
  },
  h1: {
    color: '#fff',
    marginLeft: '10px',
    fontWeight: '200'
  },
  button: {
    backgroundColor: 'inherit',
    fontSize: '1em',
    border: 'none',
    color: '#665ed0',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block'
  },
  chatDiv: {
    display: 'flex',
    height: '400px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.15)',
    backgroundColor: '#665ed0',
    margin: '10px 0 10px 0'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'main',
      users: [],
      userClicked: null
    }
    this.changeView = this.changeView.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: users
    })
  }

  changeView(view, userClicked){
    this.setState({
      activeView: view,
      userClicked
    })
  }

  filterUsers(status){
    const users = this.state.users.filter(user => user.status === status);
    return users;
  }

  render () {
    const { activeView, userClicked } = this.state;

    return (
      <div style={styles.mainDiv}>
        <div style={styles.header}>
          <IoAndroidHand height={40} width={40} color='#fff' stroke='#665ed0' strokeWidth="1"/>
          <h1 style={styles.h1}>Anchor</h1>
        </div>
        <div>
          <button
            onClick={() => this.changeView('showClimbers')}
            style={styles.button} >
              See climbers next you
          </button>
          <button
            onClick={() => this.changeView('showAnchors')}
            style={styles.button} >
              Anchored climbers
          </button>
        </div>
        {activeView === 'showClimbers' && (
          <List users={this.filterUsers('none')} />
        )}
        {activeView === 'showAnchors' && (
          <List users={this.filterUsers('liked')} changeView={this.changeView} />
        )}
        {activeView === 'userClicked' && (
          <div style={styles.chatDiv}>
            <Item user={userClicked} />
            <Chat />
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));