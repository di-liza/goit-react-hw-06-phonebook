// import PropTypes from 'prop-types';

import { Item } from './Contact.styled';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/constactsSlice';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <Item>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        <DeleteIcon width={20} height={20} />
      </button>
    </Item>
  );
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   handleDeleteBTN: PropTypes.func.isRequired,
// };
