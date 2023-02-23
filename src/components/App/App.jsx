import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { ContactForm } from '../ContactForm.jsx/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { StyledApp } from './App.styled';

export function App() {
  const contacts = useSelector(selectContacts);

  return (
    <StyledApp>
      <h1 style={{ fontSize: '32px' }}>Phone book</h1>
      <ContactForm />
      <h2 style={{ fontSize: '32px' }}>Contacts</h2>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You haven't any contacts</p>
      )}
    </StyledApp>
  );
}
