import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import { FaTrashAlt } from "react-icons/fa";

const ContactCard = (props) => {
  const { id, firstName, lastName, email, phoneNumber } = props.contact;
  // console.log(props.contact);

  return (
    <div className="flex justify-center items-center py-2">
      <div className="border border-gray-400 bg-white rounded p-4 flex flex-col leading-normal">
        <div className="flex items-center justify-between">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={user}
            alt="Avatar"
          />
          <div className="text-sm w-60">
            <Link to={`/contact/${id}`} state={props.contact}>
              <p className="text-gray-900 leading-none">{firstName} {lastName}</p>
              <p className="text-gray-600">{email}</p>
              <p className="text-gray-600">{phoneNumber}</p>
            </Link>
          </div>
          <div className="text-sm">
            <FaTrashAlt
              className="w-8 h-8 text-red-500"
              onClick={() => props.clickHandler(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
