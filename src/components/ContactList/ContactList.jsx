import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

//

import PropTypes from 'prop-types';

import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { ListContacts } from './ContactList.styled';

// {
//   contacts, deleteContact;
// }

export const ContactList = () => {
  const visibleContacts = useSelector(getContacts);
  return (
    <ListContacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactPerson
          key={id}
          id={id}
          name={name}
          number={number}
          // deleteContact={deleteContact}
        />
      ))}
    </ListContacts>
  );
};

// ContactList.propTypes = {
//   // deleteContact: PropTypes.func.isRequired,

//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
