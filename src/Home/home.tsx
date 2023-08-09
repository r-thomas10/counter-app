import './home.css'

  function doThing() {

  }

//  function App() {
//    const [contacts, setContacts] = useState<Contact[]>([
//      {
//        name: "Dan Cummings",
//        email: "dan@dan.com",
//        address: "123 frost lane",
//        favorite: true,
//        notifications: false,
//        state: "MI",
//      },
//      {
//        name: "Din Cummings",
//        email: "din@dan.com",
//        address: "123 frost lane",
//        favorite: true,
//        notifications: false,
//        state: "MI",
//      },
//      {
//        name: "Don Cummings",
//        email: "don@dan.com",
//        address: "123 frost lane",
//        favorite: false,
//        notifications: true,
//        state: "MI",
//      },
//    ]);

//    function changeFirstName() {
//      // Made a copy
//      const tempContacts = [...contacts];

//      // Changed the data
//      tempContacts[0].name = "Blah";

//      // Replace the data
//      setContacts(tempContacts);
//    }

//    function muteAll() {
//      // Copy
//      const tempContacts = [...contacts];

//      // Change
//      for (let contact of tempContacts) {
//        contact.notifications = true;
//      }

//      // Replace
//      setContacts(tempContacts);
//    }

//    function updateContacts(contact: Contact) {
//      // Copy
//      const tempContacts = contacts.slice(0);

//      // Change
//      tempContacts.push(contact);

//      // Replace
//      setContacts(tempContacts);
//    }

//    function removeContactByIndex(index: index) {
//      const tempContacts = contacts.slice(0);
//      tempContacts.splice(index, 1);
//      //updating state by updating with new changed array
//      setContacts(tempContacts);
//    }

//    function changeFavorite(favorited: boolean) {}

//    return (
//      <div className="App">
//        <ContactForm updateContacts={updateContacts}></ContactForm>
//        <div className="contact-container">
//          {contacts.map((contact, index) => (
//            <ContactCard
//              key={contact.toString()}
//              contact={contact}
//              remove={() => {
//                removeContactByIndex(index);
//              }}
//            ></ContactCard>
//          ))}
//        </div>
//        <button onClick={changeFirstName}>Change me!</button>
//        <button onClick={muteAll}>Mute all</button>
//      </div>
//    );
//  }

//  export default App;

//   export default home