import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import OrderItem from "../components/OrderItem";
import CheckoutInfo from "../components/CheckoutInfo";
const Cart = () => {
  return (
    <div>
      <Nav />
      <Breadcrumb current={"Cart"} />
      <h1 className="title my-12"> Cart </h1>
      <main className="flex justify-center gap-x-20">
        <article className="">
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-bold text-3xl"> Order Details</h1>
            <a className=""> Edit </a>
          </div>
          <div className="flex flex-col">
            <OrderItem imgSrc="donuts.png" />
          </div>
          <div className="flex justify-between">
            <h3 className=""> Current Points: 4350</h3>
            <Link href="/rewards">
              <a> See Rewards </a>
            </Link>
          </div>
        </article>
        <article className="">
          <CheckoutInfo subtotal={12.99} total={14.0} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
