// import PropTypes, { shape } from 'prop-types';

import { ListBox } from './ContactList.styled';
import Contact from 'components/Contact';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
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
