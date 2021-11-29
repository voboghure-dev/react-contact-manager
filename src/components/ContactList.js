import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  return (
    <div className="py-6">
      <h2>
        Contact List
        <Link to="/add">
          <button className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 float-right">
            Add Contact
          </button>
        </Link>
      </h2>

      <div className="py-6 flex justify-around">
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
