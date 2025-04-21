
import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("contact.json")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {contacts.map((item) => (
        <ContactCard key={item._id} contactData={item} />
      ))}
    </div>
  );
};

export default ContactList;
