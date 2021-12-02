import type { NextPage } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";

const Rewards: NextPage = () => {
  return (
    <div className="bg-def">
      <Nav />
      <Breadcrumb current={"Rewards"} />
      <h1 className="title my-12"> Rewards</h1>
      <Footer />
    </div>
  );
};

export default Rewards;
