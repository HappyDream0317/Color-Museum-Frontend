import Head from "next/head";
import React from "react";
import Connect from "../components/Connect/Connect";

const connect = () => {
  return (
    <>
      <Head>
        <title>Connect Your Wallet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Connect />
    </>
  );
};

export default connect;