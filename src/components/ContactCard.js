import React from "react";
import user from "../images/user.png";
import { TrashIcon } from "@heroicons/react/outline";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div class="w-full max-w-sm">
      <div class="border border-gray-400 bg-white rounded p-4 flex flex-col leading-normal">
        <div class="flex items-center justify-between">
          <img class="w-10 h-10 rounded-full mr-4" src={user} alt="Avatar" />
          <div class="text-sm w-60">
            <p class="text-gray-900 leading-none">{name}</p>
            <p class="text-gray-600">{email}</p>
          </div>
          <div class="text-sm">
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
