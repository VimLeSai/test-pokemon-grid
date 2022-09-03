import React from "react";

export const GlobalContext = React.createContext({
  page: 1,
  limit: 20,
  keyword: undefined,
  total: 0,
});
