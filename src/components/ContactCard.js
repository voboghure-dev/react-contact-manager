import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import { TrashIcon } from "@heroicons/react/outline";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  // console.log(props.contact);

  return (
    <div className="w-full max-w-sm">
      <div className="border border-gray-400 bg-white rounded p-4 flex flex-col leading-normal">
        <div className="flex items-center justify-between">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={user}
            alt="Avatar"
          />
          <div className="text-sm w-60">
            <Link
              to={{
                pathname: `/contact/${id}`,
                state: { contact: props.contact },
              }}
            >
              <p className="text-gray-900 leading-none">{name}</p>
              <p className="text-gray-600">{email}</p>
            </Link>
          </div>
          <div className="text-sm">
            <TrashIcon
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
