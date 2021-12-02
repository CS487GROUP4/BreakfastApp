import type { NextPage } from "next";
import OrderDetails from "./OrderDetails";
import Link from "next/link";

const CheckoutInfo: NextPage<{
  subtotal: number;
  total: number;
  checkOut?: boolean;
}> = ({ subtotal, total, checkOut }) => {
  function placeOrder(e: any) {
    e.preventDefault();
    if (checkOut) {
      alert("Order placed");
    }
  }
  return (
    <div className="flex flex-col p-5 bg-white shadow-card rounded-xl justify-between">
      <h1 className="font-bold text-2xl mb-3"> Checkout Information </h1>
      <div className="flex">
        <OrderDetails
          title="Glazed Donut"
          options="Single"
          quantity={3}
          price={3.0}
        />
      </div>

      <form action="post" className="">
        <label className="font-semibold">Enter in gift/promo code</label>
        <div className="flex">
          <input type="text" className="border border-black" />
          <button
            type="submit"
            className="bg-primary text-white font-bold px-5 py-2"
          >
            Apply
          </button>
        </div>
      </form>

      <div className="">
        <div className="flex justify-between">
          <p>Subtotal </p>
          <span className="">${subtotal}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <p className=""> Total </p>
          <span className=""> ${total}</span>
        </div>
      </div>
      <div className="text-center bg-primary text-white rounded-lg shadow-btn py-1 font-bold text-xl">
        <Link href="/checkout">
          <a onClick={placeOrder}>
            {checkOut ? "Place Your Order" : "Checkout"}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutInfo;
