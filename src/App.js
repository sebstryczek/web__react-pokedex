import React, { Component } from 'react';
import { listTypes, findPokemonsByType } from './services/pokeapiService';
import LoadingScreen from './components/LoadingScreen';
import PokemonsList from './components/PokemonsList';
import TypesList from './components/TypesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      types: [],
      selectedType: null,
      selectedTypeNames: []
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
    const selectedTypeNames = res.map(x => x.pokemon.name);
    this.setState({ isLoading: false, selectedType: type, selectedTypeNames })
  }

  deselectType = () => {
    this.setState({ selectedType: null, selectedTypeNames: [] })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isLoading ? <LoadingScreen /> : null
        }
        {
          this.state.selectedType
            ?
            <PokemonsList
              type={this.state.selectedType}
              names={this.state.selectedTypeNames}
              onClose={this.deselectType} />
            :
            <TypesList
              types={this.state.types}
              onSelect={this.selectType} />
        }
      </div>
    );
  }
}

export default App;
