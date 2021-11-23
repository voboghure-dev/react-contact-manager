import React from "react";
import { BookOpenIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="bg-green-400 text-white py-6 px-4 flex justify-center">
      <div>
        <BookOpenIcon className="w-20 h-20" />
        <p>Phone Book</p>
      </div>
    </header>
  );
};

export default Header;
