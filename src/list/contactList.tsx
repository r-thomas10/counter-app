import { Contact } from "../model/contact";
import ContactForm from "../form/contactForm";
import contactCard from "../components/contactCard";

interface ContactListProps {
    contact: Contact;
    //remove(): void;
}

function contactList(contacts: Contact) {

  return (
    <div className="contactList">
      <ContactForm updateContacts={updateContacts}></ContactForm>
      <div className="contact-container">
        {contacts.map((contact, index) => (
          <ContactCard 
          key={contact.toString()} 
          contact={contact} 
          remove={() => { removeContactByIndex(index)}}
          ></ContactCard>
        ))}
      </div>
      <button onClick={changeFirstName}>Change me!</button>
      <button onClick={muteAll}>Mute all</button>
    </div>
  );
        }

function ContactCard({ contact }: ContactListProps)  {

  return (
    <div className="contact-container"></div>
        {contact.map((contact) => (
          <ContactCard 
          key={contact.toString()} 
          contact={contact} 
  )}
        )}
    
  export default contactList;