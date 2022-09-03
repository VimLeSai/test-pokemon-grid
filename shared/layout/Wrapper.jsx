import React from "react";
import Head from "next/head";
import Footer from "shared/layout/Footer";
import Header from "shared/layout/Header";

const Wrapper = ({ noSearch, children }) => {
  return (
    <div className="max-h-screen min-h-screen pb-12 overflow-y-auto">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header noSearch={noSearch} />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
