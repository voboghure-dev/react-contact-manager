import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactDetails = (props) => {
    const location = useLocation();
    console.log(location);
  //   const { id, name, email } = props.contact;

  return (
    <div className="flex justify-around py-6">
      <div className="max-w-lg p-4 shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a href="#" className="mb-0 capitalize dark:text-coolGray-100">
              Contact Details
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <a href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leading-snug dark:text-coolGray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
        <Link to="/">
          <button
            type="button"
            className="px-8 py-3 mt-6 font-semibold border rounded bg-green-300 dark:border-coolGray-100 dark:text-coolGray-100"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
