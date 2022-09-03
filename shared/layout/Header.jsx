import React from "react";
import SearchBar from "shared/search";

const Header = (props) => {
  return (
    <header className="flex items-center justify-between w-screen max-w-4xl px-6 py-6 mx-auto">
      <h1 className="text-3xl font-bold">
        <label className="text-blue-600">Pokedex!</label>
      </h1>

      {Boolean(!props.noSearch) && <SearchBar />}
    </header>
  );
};

export default Header;
