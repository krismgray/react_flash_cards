import React, { Component } from 'react';
import FlashCards from './components/FlashCards';
import FlashCardForm from './components/FlashCardForm';
import { Button } from 'semantic-ui-react';


class App extends Component {
  state = { flashCards: [], id: 1, showForm: false }

  addCard = (card) => {
    let { flashCards, id } = this.state;
    this.setState({ flashCards: [{ ...card, id }, ...flashCards], id: id+1, showForm: !this.state.showForm });
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    if ( this.state.showForm === true ) {
      return(
      <div>
        <FlashCardForm addCard={this.addCard} />
        <Button primary onClick={this.toggleForm}>Hide Form</Button>
      </div>
      )
    } else {
      return (
        <div>
          <div>
            <h2>Flash Cards</h2>
          </div>
          <div>
            <Button primary onClick={this.toggleForm}>Add New Flash Card</Button>
            <FlashCards cards={this.state.flashCards} />
          </div>
        </div>
      );
    }
  }
}

export default App;
