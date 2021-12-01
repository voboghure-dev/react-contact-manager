import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactDetails = (props) => {
  const location = useLocation();

  const { firstName, lastName, email, phoneNumber } = location.state;

  var today = new Date(),
    date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
  //   console.log(curDate);

  return (
    <div className="max-w-2xl px-8 py-4 mt-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {date}
        </span>
        <Link
          to="/"
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
        >
          Back to Home
        </Link>
      </div>

      <div className="mt-2">
        <div className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
          {firstName} {lastName}
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Email: {email}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Phone: {phoneNumber}</p>
      </div>

    </div>
  );
};

export default ContactDetails;
