import { useState } from "react";

function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState<number>(); 
    const [favorite, setFavorite] = useState<boolean>(); 

    setFirstName("");
    setLastName("");
    setPhoneNumber(999999999);
    setFavorite(true);


    // function createContact(event: FormEvent<HTMLFormElement>): void {
    //     throw new Error("Function not implemented.");
    // }

    return (
  <form>  
    
    {/* onsubmit= */}
    <label htmlFor="firstName">First Name</label>
    <input type="text" id="firstName" value={firstName}
      onChange={(event) => setFirstName(event.target.value)}
    ></input>

    <label htmlFor="lastName">Last Name</label>
    <input
      type="lastName"
      id="lastName"
      value={lastName}
      onChange={(event) => setLastName(event.target.value)}
    ></input>

    <label htmlFor="phoneNumber">Phone Number</label>
    <input
      type="phoneNumber"
      id="phoneNumber"
      value={phoneNumber}
      onChange={(event) => setPhoneNumber(event.target.valueAsNumber)}
    ></input>

    <label htmlFor="favorite">Favorite</label>
    <input
      type="checkbox"
      name="Favorite"
      id="favorite"
      onChange={(e) => setFavorite(e.target.checked)}
      checked={favorite}
    />
    <button type="submit">Add Contact</button>
  </form>
);    
}



export default ContactForm;