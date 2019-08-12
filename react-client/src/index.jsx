import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import users from './mockData.js';

import List from './components/List.jsx';

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
      <div>
        <h1>Anchor</h1>
        <button onClick={() => this.changeView('showClimbers')}>See climbers next you</button>
        <button onClick={() => this.changeView('showAnchors')}>Anchored climbers</button>
        {activeView === 'showClimbers' && <List users={this.filterUsers('none')} />}
        {activeView === 'showAnchors' && <List users={this.filterUsers('liked')} />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));