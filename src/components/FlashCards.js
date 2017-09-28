import React from 'react';
import FlashCard from './FlashCard';
import FlashCardForm from './FlashCardForm';

class FlashCards extends React.Component {

  displayFlashCards = () => {
    return this.props.cards.map( card => {
      return(<FlashCard card={card} />);
    });
  }

  render() {
    return(
      <div>
        { this.displayFlashCards() }
      </div>
    )
  }
}

export default FlashCards;
