import type { ReactElement } from "react";
import type { NextPage } from "next";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
