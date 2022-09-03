import { GlobalContext } from "context/index";
import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const [search, setSearch] = useState();
  const [debouncedSearch] = useDebounce(search, 500);

  const ctx = useContext(GlobalContext);

  useEffect(() => {
    ctx.setKeyword(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="mt-3 md:text-2xl">
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="p-3 font-mono bg-gray-100 rounded-md md:text-lg"
      />
    </div>
  );
};

export default SearchBar;
