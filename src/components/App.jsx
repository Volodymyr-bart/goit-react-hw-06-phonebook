import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
      // addContact={handleAddContact}
      />
      <h2>Contacts</h2>
      <Filter
      // value={filter}
      // onChange={handleFilterChange}
      />

      <ContactList
      // contacts={filteredContacts()}
      // deleteContact={handleDeleteContact}
      />
    </>
  );
};
