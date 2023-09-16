import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, Zag, Blok } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
componentDidMount() {
  const storedContacts = localStorage.getItem('contacts');//получаємо данні з локал сторидж
  if (storedContacts) {
    this.setState({ contacts: JSON.parse(storedContacts) });// перетворюємо з рядка в обєкт
  }
}

    componentDidUpdate(_, prevState) {
    if (prevState.contacts!==this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));    }
  }

  // Додавання нового контакту. перевіряє чи існує контакт  таким іменем
  addContact = contact => {
    const isContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContacts) {
      alert(`${contact.name} exist`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };


  // Фільтр
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  // Відфільтровані контакти
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();// нижній регістр

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  // Видалення контакту
  removeContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idContact),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.addContact} />

        <Zag>Contacts</Zag>
        {this.state.contacts.length > 0 ? (
          // Фільтр
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        ) : (
          <Blok>It's empty. Add a contact!</Blok>
        )}
        {this.state.contacts.length > 0 && (
          // Список контактів
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </Container>
    );
  }
}

export default App;