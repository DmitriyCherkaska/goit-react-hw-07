// import style from './ContactForm.module.css';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { BsBoxArrowUpLeft } from 'react-icons/bs';
import { addContact } from '../../redux/contactsOps';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      'Invalid phone number (use format: (XXX) XXX-XXXX)',
    )
    .required('Required'),
});
const TextMaskCustom = ({ field, ...props }) => (
  <MaskedInput
    {...field}
    {...props}
    mask={[
      '(',
      /[0-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]}
    placeholder="(123) 456-7890"
    showMask
  />
);
const ContactForm = ({ setIsFormVisible }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    setIsFormVisible(true);
    actions.resetForm();
  };
  const handleCloseForm = actions => {
    setIsFormVisible(true);
    actions.resetForm();
  };
  const handleClick = event => {
    const input = event.target;
    if (input.value === '' || input.value === '(___) ___-____') {
      setTimeout(() => {
        input.setSelectionRange(1, 1);
      }, 0);
    }
  };
  return (
    <section>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        {resetForm => (
          <Form>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" component="span" />
            <label htmlFor={numberFieldId}>Number</label>

            <Field
              type="tel"
              name="number"
              id={numberFieldId}
              component={TextMaskCustom}
              onClick={handleClick}
            />
            <ErrorMessage name="number" component="span" />
            <button type="submit">Add contact</button>
            <button type="button" onClick={() => handleCloseForm(resetForm)}>
              <BsBoxArrowUpLeft size={20} />
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default ContactForm;
