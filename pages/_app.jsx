import React, { Suspense } from "react";

// using context for common state management
import { GlobalContext } from "../context";
import useGlobalContext from "../hooks/useGlobalContext";
// styles
import "react-pagination-bar/dist/index.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const context = useGlobalContext();

  return (
    <Suspense>
      <GlobalContext.Provider value={context}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </Suspense>
  );
}

export default MyApp;
