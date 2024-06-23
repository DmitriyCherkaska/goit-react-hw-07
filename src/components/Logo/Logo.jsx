// import style from './Logo.module.css';
import { MdAddCircle } from 'react-icons/md';
const Logo = () => {
  return (
    <header>
      <div>
        <h1>
          <MdAddCircle size={50} />
          <br />
          Phonebook
        </h1>
      </div>
    </header>
  );
};
export default Logo;
