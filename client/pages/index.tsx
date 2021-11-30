import type { NextPage } from "next";
import Nav from "../components/Nav";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-def h-screen">
      <Head>
        <title> Bhole App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
