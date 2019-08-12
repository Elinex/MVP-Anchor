import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'main'
    }
    this.changeView = this.changeView.bind(this);
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
  }

  changeView(view){
    this.setState({
      activeView: view
    })
  }

  render () {
    const { activeView } = this.state;
    console.log(this.state)
    return (
      <div>
        <h1>Anchor</h1>
        <button onClick={() => this.changeView('showClimbers')}>See climbers next you</button>
        <button onClick={() => this.changeView('showAnchors')}>Anchored climbers</button>
        {activeView === 'showClimbers' && <h5>showClimbers</h5>}
        {activeView === 'showAnchors' && <h5>showAnchors</h5>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));