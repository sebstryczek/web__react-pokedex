import React, { Component } from 'react';
import './App.css';
import { listTypes, findPokemonsByType } from './services/pokeapiService';
import PokemonItem from './components/pokemonItem/PokemonItem';
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
      types: res.map( x => x.name )
    })
  }

  selectType = async type => {
    const res = await findPokemonsByType(type);
    this.setState({
      selectedType: type,
      pokemons: res.map( x => x.pokemon.name )
    })
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
              {
                this.state.pokemons.map(
                  (pokemon, i) => <PokemonItem key={i} name={pokemon}/>
                )
              }
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
