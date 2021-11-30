import type { NextPage } from "next";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className="bg-def h-screen">
      <Nav />
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
