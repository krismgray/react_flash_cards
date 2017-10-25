import React from 'react';
import { Card, Button } from 'semantic-ui-react';

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
      <div alignContent='center'>
        <Card>
          <Card.Content textAlign='center'>
            <Card.Header>{ title }</Card.Header>
            <hr />
            <p> { this.state.showAnswer === false ? front : null } </p>
            { this.displayBack() }
            <Button primary onClick={this.toggleAnswer}>Toggle Answer</Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default FlashCard;
