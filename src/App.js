import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { listTypes, findPokemonsByType } from './services/pokeapiService';
import TypeItem from './components/typeItem/TypeItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      types: [],
      selectedType: null
    };
  }

  componentDidMount = async () => {
    const res = await listTypes();
    this.setState({
      types: res.map(x => x.name)
    })
  }

  selectType = async type => {
    const res = await findPokemonsByType(type);
    console.log(res)
    this.setState({ selectedType: type })
  }

  deselectType = () => {
    this.setState({ selectedType: null })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.selectedType ?
            <div>
              <p>{this.state.selectedType}</p>
              <button onClick={this.deselectType}>x</button>
            </div>
            :
            this.state.types.map(
              (type, i) => <TypeItem key={i} name={type} onItemClick={this.selectType} />
            )
        }
      </div>
    );
  }
}

export default App;
