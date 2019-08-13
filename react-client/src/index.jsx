import React from 'react';
import ReactDOM from 'react-dom';
import users from './mockData.js';
import IoAndroidHand from 'react-icons/lib/io/android-hand';
import faker from 'faker';

import List from './components/List.jsx';
import Item from './components/Item.jsx';
import Chat from './components/Chat.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const styles = {
  mainDiv: {
    fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif',
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px 0 20px',
    backgroundColor: '#665ed0',
    minHeight: '5em'
  },
  anchor: {
    fontSize: '2em',
    color: '#fff',
    marginLeft: '10px',
    fontWeight: '200',
    backgroundColor: 'inherit',
    border: 'none',
    textDecoration: 'none',
    display: 'inline-block',
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
  },
  loginDiv: {
    flex: 1,
    textAlign: 'right',
  },
  buttonLogin: {
    backgroundColor: 'inherit',
    fontSize: '1em',
    border: 'none',
    color: '#fff',
    textDecoration: 'none',
    display: 'inline-block',
    fontWeight: '200'
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'showClimbers',
      users: [],
      userClicked: null,
      userName: ''
    }
    this.changeView = this.changeView.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  componentWillMount(){
    this.setState({
      userName: `${faker.name.firstName()} ${faker.name.lastName()}`
    })
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

  changeStatus(status, userClicked){
    userClicked.status = status;
    const filterUsers = this.state.users.filter(user =>
      user.id !== userClicked.id
    );
    this.setState({
      users: filterUsers.concat(userClicked)
    });
  }

  filterUsers(status){
    const users = this.state.users.filter(user => user.status === status);
    return users;
  }

  render () {
    const { activeView, userClicked, userName } = this.state;

    return (
      <div style={styles.mainDiv}>
        <div style={styles.header}>
          <IoAndroidHand height={40} width={40} color='#fff' stroke='#665ed0' strokeWidth="1"/>
          <button onClick={() => this.changeView('showClimbers')} style={styles.anchor}>
            Anchor
          </button>
          <div style={styles.loginDiv}>
            <button
              onClick={() => this.changeView('login')}
              style={styles.buttonLogin} >
                Login
            </button>
            <button
              onClick={() => this.changeView('signup')}
              style={styles.buttonLogin} >
                Sign up
            </button>
          </div>
        </div>
        {(activeView !== 'login' && activeView !== 'signup') && (
          <div>
            <button
              onClick={() => this.changeView('showClimbers')}
              style={styles.button} >
                Climbers close to you
            </button>
            <button
              onClick={() => this.changeView('showAnchors')}
              style={styles.button} >
                Matches
            </button>
          </div>
        )}
        {activeView === 'showClimbers' && (
          <List users={this.filterUsers('none')} changeStatus={this.changeStatus}/>
        )}
        {activeView === 'showAnchors' && (
          <List users={this.filterUsers('matched')} changeView={this.changeView} />
        )}
        {activeView === 'userClicked' && (
          <div style={styles.chatDiv}>
            <Item user={userClicked} />
            <Chat user={userClicked} userName={userName} />
          </div>
        )}
        {activeView === 'login' && (
          <Login />
        )}
        {activeView === 'signup' && (
          <Signup />
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));