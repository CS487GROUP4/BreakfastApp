import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import OrderItem from "../components/OrderItem";

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
          <div className="">
            <OrderItem
              title="Glazed Donut"
              imgSrc="donuts.png"
              options="Single"
              quantity={3}
              price={3.0}
            />
          </div>
          <div className="">
            <h3 className=""> Current Points: 4350</h3>
            <Link href="/rewards">
              <a> See Rewards </a>
            </Link>
          </div>
        </article>
        <article className=""></article>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
