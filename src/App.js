import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCards from './components/FlashCards';
import FlashCardForm from './components/FlashCardForm';

class App extends Component {
  state = { flashCards: [], id: 1 }

  addCard = (card) => {
    let { flashCards, id } = this.state;
    this.setState({ flashCards: [{ ...card, id }, ...flashCards], id: id+1 })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flash Cards</h2>
        </div>
        <div>
          <FlashCardForm addCard={this.addCard} />
          <FlashCards cards={this.state.flashCards} foo='foo' />
        </div>
      </div>
    );
  }
}

export default App;
