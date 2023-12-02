import React, { useEffect } from 'react';
import css from './ModalEdit.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectModalData } from 'redux/modal/modal.selectors';
import { closeModal, updateModalData } from 'redux/modal/modal.reducer';
import { selectorContacts } from 'redux/contacts/contacts.selectors';
import { editContact } from 'redux/contacts/contacts.reducer';
import { Notify } from 'notiflix';

export const Modal = () => {
  const dispatch = useDispatch();

  const modalData = useSelector(selectModalData);

  const contacts = useSelector(selectorContacts);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  const submitEditContact = evt => {
    evt.preventDefault();

    const [name, number] = evt.target.elements;

    const isNameDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.value.toLowerCase() &&
        contact.id !== modalData.id
    );

    const isNumberDuplicate = contacts.some(
      contact => contact.number === number.value && contact.id !== modalData.id
    );

    if (isNameDuplicate) {
      alert(`A contact with that name already exists, try changing the name`);
      return;
    }
    if (isNumberDuplicate) {
      alert(`A contact with this phone number already exists`);
      return;
    }

    const newContactInfo = {
      name: name.value,
      number: number.value,
      id: modalData.id,
    };

    try {
      dispatch(editContact(newContactInfo));
      dispatch(updateModalData(newContactInfo));
    } catch (e) {
      Notify.error(
        `Contact "${newContactInfo.name}" not edited.  Error: ${e.message}`
      );
    } finally {
      Notify.success(`Contact "${newContactInfo.name}"  edited successfully`);
    }
  };

  return (
    <div onClick={handleOverlayClick} className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={() => dispatch(closeModal())}>
          ❌
        </button>
        <div className={css.wrapper}>
          <h3 className={css.title}>Edit contact:</h3>
          <p className={css.subtitle}>
            "{modalData.name} : {modalData.number}"
          </p>
          <form className={css.form} onSubmit={submitEditContact}>
            <input
              className={css.input}
              type="text"
              name="name"
              defaultValue={modalData.name}
              placeholder="Enter new name"
              required
              pattern="^[A-Za-zА-Яа-яЇїІі\d\s]+$"
              title="You can enter letters of the Latin and Cyrillic alphabets, numbers, and spaces."
            />
            <input
              className={css.input}
              type="tel"
              name="number"
              defaultValue={modalData.number}
              placeholder="Enter new number"
              required
              pattern="^[\d+\s\-*#]{5,18}$"
              title="Phone number can contain digits, spaces, hyphens, or symbols like *, #, etc. Length: 5-18 characters."
            />

            <button
              type="submit"
              className={css.button}
              title={`Change this contact information`}
            >
              Change information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
