import styles from '../styles/contactList.module.css';
export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => deleteContact(contact.id)}
              className={styles.buttonDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
