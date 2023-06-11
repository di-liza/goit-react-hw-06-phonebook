// import PropTypes, { shape } from 'prop-types';

import { ListBox } from './ContactList.styled';
import Contact from 'components/Contact';
import { useSelector } from 'react-redux';
import { getContactsSelector } from 'redux/constactsSlice';

export default function ContactList() {
  const contacts = useSelector(state => getContactsSelector(state));
  const filter = useSelector(state => state.filter);

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
