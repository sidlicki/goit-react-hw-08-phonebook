import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts/contacts.reducer';
import { selectorContacts } from 'redux/contacts/contacts.selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const submitAddContact = evt => {
    evt.preventDefault();

    const [name, number] = evt.target.elements;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      alert(
        `A contact with that name (${name.value.toLowerCase()}) already exists, try changing the name`
      );
      return;
    }
    if (contacts.some(contact => contact.number === number.value)) {
      alert(
        `A contact with this phone number (${number.value}) already exists`
      );
      return;
    }

    const newContact = {
      name: name.value,
      number: number.value,
    };
    try {
      dispatch(addContact(newContact))
        .unwrap()
        .then(() => {
          evt.target.reset();
        })
        .then(() => {
          Notify.success(`Contact "${newContact.name}"  added successfully`);
        });
    } catch (e) {
      Notify.error(
        `Contact "${newContact.name}" not added.  Error: ${e.message}`
      );
    }
  };
  return (
    <form onSubmit={submitAddContact} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Enter name"
        required
        pattern="^[A-Za-zА-Яа-яЇїІі\d\s]+$"
        title="You can enter letters of the Latin and Cyrillic alphabets, numbers, and spaces."
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        placeholder="Enter number"
        required
        pattern="^[\d+\s\-*#]{5,18}$"
        title="Phone number can contain digits, spaces, hyphens, or symbols like *, #, etc. Length: 5-18 characters."
      />

      <button type="submit" className={css.button} title={`Add new contact`}>
        Add contact
      </button>
    </form>
  );
};
