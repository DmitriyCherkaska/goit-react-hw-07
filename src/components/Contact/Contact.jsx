// import style from './Contact.module.css';
import { ImPhone } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <div>
        <div>
          <h2>
            <span>
              <FaRegCircleUser size={30} />
            </span>
            <span>{contact.name}</span>
          </h2>
          <a href={`tel: +${contact.number}`}>
            <span>
              <ImPhone size={16} />
            </span>
            <span>{contact.number}</span>
          </a>
        </div>
        <div>
          <button>
            <RiEdit2Fill size={18} />
          </button>
          <button onClick={onDelete}>
            <RiDeleteBin6Fill size={18} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Contact;
