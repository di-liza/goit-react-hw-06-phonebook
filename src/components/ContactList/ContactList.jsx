// import PropTypes, { shape } from 'prop-types';

import { ListBox } from './ContactList.styled';
import Contact from 'components/Contact';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const { contacts } = useSelector(state => state.contacts);
  return (
    <>
      <ListBox>
        <ul>
          {contacts.length !== 0 &&
            contacts.map(contact => {
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
