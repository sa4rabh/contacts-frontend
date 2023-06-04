import React from 'react';
import './Styles.css';

const DeleteContact = ({ contact, onDelete, onCancel }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <div>
      <h2>Delete Contact</h2>
      <p>Are you sure you want to delete {contact.name}?</p> {' '}
      <button onClick={handleDelete}>Delete</button> {' '}
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteContact;
