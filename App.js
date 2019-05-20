import React, {Component} from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  state ={
    people: [
      {name: "Tanzeel"}
    ]
  }
  boxListener=(event)=> {
    this.setState(
      {
        people: [
          {name: event.target.value}
        ]
      }
    )
  }
  render () {
    return (
      <div className="App">
        <Person name={this.state.people[0].name} changed={this.boxListener} />
      </div>
    );
  }
}

export default App;
