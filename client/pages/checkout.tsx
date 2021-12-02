import type { NextPage } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CheckoutInfo from "../components/CheckoutInfo";
import Breadcrumb from "../components/Breadcrumb";
import FormDetails from "../components/FormDetails";

const Checkout: NextPage = () => {
  return (
    <div className="bg-def">
      <Nav />

      <Breadcrumb current={"Cart / Checkout"} />

      <h1 className="title my-12"> Checkout </h1>

      <div className="flex flex-col items-center">
        <div className="flex gap-40">
          <form action="" className="">
            <h2 className=""> Contact Information</h2>
            <div className="">
              <FormDetails label="First Name" inputType="text" />
              <FormDetails label="Last Name" inputType="text" />
              <FormDetails label="Email" inputType="email" />
              <FormDetails label="Phone Number" inputType="tel" />
            </div>

            <h2 className=""> Credit Card Information</h2>
            <h3 className=""> Accepted: Discover, Visa, Mastercard, Amex</h3>
            <div className="">
              <FormDetails label="Name on card" inputType="text" />
              <FormDetails label="Card Number" inputType="text" />
              <FormDetails label="Expiration Date" inputType="text" />
              <FormDetails label="CVV" inputType="password" />
            </div>
          </form>
          <CheckoutInfo subtotal={12.0} total={14.0} />
        </div>

        <div className="w-1/4 my-5">
          <h4 className="font-bold text-2xl"> Pickup Options</h4>
          <div className="flex justify-between">
            <a className="btn-checkout"> Pick up</a>
            <a className="btn-checkout"> Delivery</a>
          </div>
        </div>

        <div className="w-1/4 my-5">
          <h4 className="font-bold text-2xl"> Order Time </h4>
          <div className="flex justify-between">
            <a className="btn-checkout"> ASAP </a>
            <a className="btn-checkout"> Later </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
