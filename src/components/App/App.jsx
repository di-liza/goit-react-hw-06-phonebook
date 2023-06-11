import { useSelector } from 'react-redux';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Notification from '../Notification';

import { Container } from './App.styled.js';

export default function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <div className="form-wrapper">
        <h2 className="title">PhoneBook</h2>
        <ContactForm />
      </div>

      <div className="contactsWrapper">
        <h1 className="title">Contacts</h1>
        <div>
          <Filter />
          <ContactList />
          {contacts.length === 0 && (
            <Notification text={'No contacts are available.'} />
          )}
        </div>
      </div>
    </Container>
  );
}
