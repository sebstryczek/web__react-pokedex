import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { listTypes } from './services/pokeapiService';
import TypeItem from './components/typeItem/TypeItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      types: []
    };
  }
  
  async componentDidMount() {
    const res = await listTypes();
    this.setState({
      types: res.map( x => x.name)
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.types.map(
            (type, i) => <TypeItem key={i} name={type}/>
          )
        }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
