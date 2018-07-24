import React, { Component } from 'react';
import { listTypes, findPokemonsByType } from './services/pokeapiService';
import PokemonItem from './components/PokemonItem';
import TypesList from './components/TypesList';
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
    const types = res.map(x => x.name)
      .filter(x => x !== 'unknown' && x !== 'shadow');
    this.setState({ isLoading: false, types })
  }

  selectType = async type => {
    this.setState({ isLoading: true });
    const res = await findPokemonsByType(type);
    this.setState({
      isLoading: false,
      selectedType: type,
      pokemons: res.map(x => x.pokemon.name)
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
              <div className="d-flex justify-content-between m-4">
                <h2>{this.state.selectedType}</h2>
                <button className="btn btn-small" onClick={this.deselectType}>x</button>
              </div>
              <div className="d-flex justify-content-start flex-wrap m-3">
                {
                  this.state.pokemons.map(
                    (pokemon, i) => <PokemonItem key={i} name={pokemon} />
                  )
                }
              </div>
            </div>
          :
          <TypesList types={this.state.types} onSelect={this.selectType} />
        }
      </div>
    );
  }
}

export default App;
