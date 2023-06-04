import React, { useState } from 'react';
import Contacts from './Contacts';
import AddContact from './AddContact';
import EditContact from './EditContact';
import DeleteContact from './DeleteContact';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [deletingContact, setDeletingContact] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Function to add a new contact
  const addContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    updatedContacts.sort((a, b) => a.name.localeCompare(b.name)); // Sort contacts alphabetically
    setContacts(updatedContacts);
    setIsAddModalOpen(false);
  };

  // Function to delete a contact
  const deleteContact = (id) => {
    const contactToDelete = contacts.find((contact) => contact.id === id);
    setDeletingContact(contactToDelete);
    setIsDeleteModalOpen(true);
  };

  // Function to confirm deletion
  const confirmDelete = () => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== deletingContact.id
    );
    setContacts(updatedContacts);
    setDeletingContact(null);
    setIsDeleteModalOpen(false);
  };

  // Function to cancel deletion
  const cancelDelete = () => {
    setDeletingContact(null);
    setIsDeleteModalOpen(false);
  };

  // Function to edit a contact
  const editContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === updatedContact.id) {
        return updatedContact;
      }
      return contact;
    });
    updatedContacts.sort((a, b) => a.name.localeCompare(b.name)); // Sort contacts alphabetically
    setContacts(updatedContacts);
    setEditingContact(null);
    setIsEditModalOpen(false);
  };

  // Function to set the contact to be edited
  const startEditing = (contact) => {
    setEditingContact(contact);
    setIsEditModalOpen(true);
  };

  // Function to cancel editing
  const cancelEditing = () => {
    setEditingContact(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className='container' >
      <Contacts
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={startEditing}
      />
      <button className="add-button" onClick={() => setIsAddModalOpen(true)}>
        + Add Contact
      </button>

      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <AddContact onAdd={addContact} onCancel={() => setIsAddModalOpen(false)} />
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {editingContact && (
          <EditContact
            contact={editingContact}
            onEdit={editContact}
            onCancel={cancelEditing}
          />
        )}
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {deletingContact && (
          <DeleteContact
            contact={deletingContact}
            onDelete={confirmDelete}
            onCancel={cancelDelete}
          />
        )}
      </Modal>
    </div>
  );
}

export default App;

