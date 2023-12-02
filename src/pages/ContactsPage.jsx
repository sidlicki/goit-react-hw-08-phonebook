import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './styles.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';

const ContactsPage = () => {
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
