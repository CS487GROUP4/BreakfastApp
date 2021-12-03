import type { NextPage } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";

const Reports: NextPage = () => {
  return (
    <div className="bg-def">
      <Nav />
      <Breadcrumb current={"Reports"} />
      <h1 className="title my-12"> Reports</h1>
      <Footer />
    </div>
  );
};

export default Reports;
