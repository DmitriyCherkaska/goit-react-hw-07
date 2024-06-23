// import style from './Error.module.css';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';

const Error = () => {
  const error = useSelector(selectError);
  return <p>{error}</p>;
};
export default Error;
