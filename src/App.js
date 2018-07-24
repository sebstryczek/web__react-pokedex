import React, { Component } from 'react';
import { listTypes, findPokemonsByType } from './services/pokeapiService';
import PokemonItem from './components/PokemonItem';
import TypeItem from './components/TypeItem';
import LoadingScreen from './components/LoadingScreen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      types: [],
      selectedType: null
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const res = await listTypes();
    this.setState({
      isLoading: false,
      types: res.map( x => x.name )
    })
  }

  selectType = async type => {
    this.setState({ isLoading: true });
    const res = await findPokemonsByType(type);
    this.setState({
      isLoading: false,
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
          this.state.isLoading ? <LoadingScreen /> : null
        }

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
            <div className="d-flex flex-row flex-wrap m-3">
            {

            this.state.types.map(
              (type, i) => <TypeItem key={i} name={type} onItemClick={this.selectType} />
            )
            }
            </div>
        }
      </div>
    );
  }
}

export default App;
