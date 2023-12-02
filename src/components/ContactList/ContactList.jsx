import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchAllContacts,
} from 'redux/contacts/contacts.reducer';
import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';
import {
  selectorContacts,
  selectorFilter,
  selectorIsLoading,
} from 'redux/contacts/contacts.selectors';
import { openModal } from 'redux/modal/modal.reducer';
import { Modal } from 'components/ModalEdit/ModalEdit';
import { selectIsOpenModal } from 'redux/modal/modal.selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(selectorContacts);

  const filter = useSelector(selectorFilter);

  const isLoading = useSelector(selectorIsLoading);

  const isOpenModal = useSelector(selectIsOpenModal);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.trim().toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.trim().toString().includes(filter.toLowerCase().trim())
  );

  const filteredAndSortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleDeleteContact = (name, id) => {
    dispatch(deleteContact(id));
    Notify.info(`Contact "${name}" deleted`);
  };

  return (
    <ul className={css.list}>
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      )}
      {filteredAndSortedContacts.length > 0 ? (
        filteredAndSortedContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            {/* button edit */}
            <button
              className={css.button}
              title={`Edit this conatct`}
              onClick={() => dispatch(openModal(contact))}
            >
              🖊
            </button>
            {/*  */}
            <a className={css.link} href={`tel:${contact.number}`}>
              <span>
                <b>{contact.name}</b>:
              </span>
              <span> {contact.number}</span>
            </a>

            <button
              className={`${css.button} ${css.buttonDelete}`}
              onClick={() => handleDeleteContact(contact.name, contact.id)}
              title={`Delete contact "${contact.name}"`}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <h3 className={css.subtitle}>No contacts found.</h3>
      )}
      {isOpenModal && <Modal />}
    </ul>
  );
};
