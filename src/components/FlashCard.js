import React from 'react';

class FlashCard extends React.Component {
  state = { showAnswer: false };

  displayBack = () => {
    if(this.state.showAnswer) {
      return(
        <h3>
          <i>Answer: { this.props.card.back } </i>
        </h3>
      )
    }
  }

  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  }


  render() {
    let { title, front, back } = this.props.card;

    return(
      <div>
        <h1>{ title }</h1>
        <hr />
        <p> { this.state.showAnswer === false ? front : null } </p>
        { this.displayBack() }
        <button onClick={this.toggleAnswer}>Toggle Answer</button>
      </div>
    );
  }
}

export default FlashCard;
