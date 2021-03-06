import type { NextPage } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import CartItem from "../components/CartItem";
import CheckoutInfo from "../components/CheckoutInfo";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import cart from "../data/cart.json";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      cart,
    },
  };
};
const Cart: NextPage<{ cart: any }> = ({ cart }) => {
  return (
    <div className="bg-def">
      <Nav />
      <Breadcrumb current={"Cart"} />
      <h1 className="title my-12"> Cart </h1>
      <main className="flex justify-center gap-x-20">
        <article className="">
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-bold text-3xl"> Order Details</h1>
            <a className="underline cursor-pointer text-error font-semibold">
              Edit
            </a>
          </div>
          <div className="flex flex-col">
            {cart.map((item: any) => {
              return (
                <CartItem
                  imgSrc={item.imgUrl}
                  productName={item.name}
                  options={""}
                  quantity={item.quantity}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-5">
            <h3 className="font-semibold text-lg"> Current Points: 4350</h3>
            <div className="px-4 py-2 bg-primary text-white font-semibold shadow-btn rounded-def">
              <Link href="/rewards">
                <a> See Rewards </a>
              </Link>
            </div>
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
