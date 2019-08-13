import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import users from './mockData.js';
import IoAndroidHand from 'react-icons/lib/io/android-hand';

import List from './components/List.jsx';

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
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'main',
      users: []
    }
    this.changeView = this.changeView.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
    this.setState({
      users: users
    })
  }

  changeView(view){
    this.setState({
      activeView: view
    })
  }

  filterUsers(status){
    const users = this.state.users.filter(user => user.status === status);
    return users;
  }

  render () {
    const { activeView } = this.state;

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
        {activeView === 'showClimbers' && <List users={this.filterUsers('none')} />}
        {activeView === 'showAnchors' && <List users={this.filterUsers('liked')} />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));