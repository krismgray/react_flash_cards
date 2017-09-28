import React from 'react';
import FlashCards from './FlashCards';
import { Form, Button } from 'semantic-ui-react';

class FlashCardForm extends React.Component {
  state = { title: '', back: '', front: '' }


  handleChange = (e) => {
    let { target: { name, value }} = e;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCard({...this.state})
    this.setState({ title: '', back: '', front: '' })
  }

  render() {
    let { title, back, front } = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
        <label>Title</label>
        <input
          name='title'
          value={title}
          onChange={this.handleChange}
        />
        </Form.Field>
        <br />
        <Form.Field>
        <label>Back</label>
        <input
          name='back'
          value={back}
          onChange={this.handleChange}
        />
        </Form.Field>
        <br />
        <Form.Field>
        <label>Front</label>
        <input
          name='front'
          value={front}
          onChange={this.handleChange}
        />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}



export default FlashCardForm;
