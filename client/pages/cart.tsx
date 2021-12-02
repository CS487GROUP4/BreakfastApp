import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";
const Cart = () => {
  return (
    <div>
      <Nav />
      <Breadcrumb current={"Cart"} />
      <h1 className="title my-12"> Cart </h1>
      <main>
        <article className="">
          <div className="">
            <h1 className=""> Order Details</h1>
            <a className=""> Edit </a>
          </div>
          <div className=""></div>
        </article>
        <article className=""></article>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
