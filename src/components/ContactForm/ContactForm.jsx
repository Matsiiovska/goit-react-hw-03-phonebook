import React from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button, Input } from './ContactForm.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  // Унікальні ідентифікатори
  nameInputId = nanoid();
  numberInputId = nanoid();

  // відправка форми
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    // Скидання форми
    this.reset();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  
  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label >
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact </Button>
      </Form>
    );
  }
}

export default ContactForm;