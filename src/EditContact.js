import React, { useState, useEffect } from 'react';
import './Styles.css';

const EditContact = ({ contact, onEdit, onCancel }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(null);

  useEffect(() => {
    setName(contact.name);
  }, [contact]);

  useEffect(() => {
    setNumber(contact.number);
    }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    if (number.trim() === '') return;
    const updatedContact = { ...contact, name: name.trim(), number: number.trim() };
    onEdit(updatedContact);
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter Phone number"
        />
        <button type="submit">Save</button> {' '}
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditContact;
