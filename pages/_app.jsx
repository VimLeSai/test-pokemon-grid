import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// using context for common state management
import { GlobalContext } from "../context";
import useGlobalContext from "../hooks/useGlobalContext";
// styles
import "react-pagination-bar/dist/index.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const context = useGlobalContext();

  return (
    <GlobalContext.Provider value={context}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
