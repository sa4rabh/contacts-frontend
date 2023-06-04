import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styles.css';

const Contacts = ({ contacts, onDelete, onEdit }) => {
  const [contactsData, setContactsData] = useState([]);
  
  useEffect(() => {
    axios.get('/api/contactsData') // Make a GET request to the backend route
      .then(response => {
        setContactsData(response.data); // Update the contacts state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p> <br/>
            <p>{contact.number}</p>
            {/* <span>{contact.name}</span> {' '}
            <span>{contact.number}</span> {' '} */}
            <button onClick={() => onEdit(contact)}>Edit</button> {' '}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
