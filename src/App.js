import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
    
  }

  /*
    la funzione fetch prende i "dati" da una API, 
    il primo then converte l'input in file json,
    il secondo then setta lo state con l'array di oggetti contenuti nel file json
*/
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  /*
  la prima istruzione destruttura lo state creando due variabili con chiamate come le variabili di state
  la funzione filter prende come input una funzione che restituisce vero o falso,
  in questo caso restituisce vero se il nome del mostro contiene quello che inserisco nella search bar 
  (mette tutto in Lower Case)
*/
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      
      <div className="App">
      <h1>Monster Roledex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
