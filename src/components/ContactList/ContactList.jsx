// import PropTypes, { shape } from 'prop-types';

import { ListBox } from './ContactList.styled';
import { Contact } from 'components';
import { useSelector } from 'react-redux';
import { getFilterSelector, getContactsSelector } from '../../redux';

export function ContactList() {
  const contacts = useSelector(getContactsSelector);
  const filter = useSelector(getFilterSelector);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ListBox>
        <ul>
          {filteredContacts.length !== 0 &&
            filteredContacts.map(contact => {
              return <Contact key={contact.id} contact={contact} />;
            })}
        </ul>
      </ListBox>
    </>
  );
}
// ContactList.propTypes = {
//   handleDeleteBTN: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     shape({
//       id: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
