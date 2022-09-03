import { useState } from "react";

const useGlobalContext = () => {
  const [keyword, setKeyword] = useState();
  const [paginate, setPaginate] = useState({
    page: 1,
    limit: 20,
    total: 0,
    offset: 0,
  });

  return {
    keyword,
    paginate,
    setKeyword,
    setPaginate,
  };
};

export default useGlobalContext;
