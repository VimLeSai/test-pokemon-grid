import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-screen py-6 px-36">
      <h1 className="text-3xl font-bold">
        Welcome to <label className="text-blue-600">Pokedex!</label>
      </h1>

      <div className="mt-3 text-2xl">
        <input
          placeholder="Search..."
          className="p-3 font-mono text-lg bg-gray-100 rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;
