import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

// список контактів
const ContactList = ({ contacts, onRemoveContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          // Кнопка видалення контакту
          <Button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </Button>
        }
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;