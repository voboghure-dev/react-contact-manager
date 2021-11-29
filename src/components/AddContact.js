import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// class AddContact extends React.Component {
const AddContact = (props) => {
  let navigates = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    props.addContactHandler(contact);
    setContact({ name: "", email: "" });

    navigates("/");
  };

  return (
    <div className="flex justify-center py-6">
      <form className="w-full max-w-sm" onSubmit={add}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-name"
              name="name"
              type="text"
              placeholder="Full name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-email"
              name="email"
              type="text"
              placeholder="Email"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-1/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Add Entry
            </button>
          </div>
          <div className="md:w-1/3 text-right">
            <Link to="/">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Home
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
