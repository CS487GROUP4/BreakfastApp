import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import storeData from "../../data/store.json";
import Breadcrumb from "../../components/Breadcrumb";
import Image from "next/image";
import Link from "next/dist/client/link";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

const Product: NextPage = (props) => {
  return (
    <div className="bg-def">
      <Nav />
      <Breadcrumb current={"Product"} />
      <h1 className="title my-12"> Item Information </h1>
      <div className="flex justify-evenly">
        <div className="text-center">
          <h1 className="font-bold text-4xl"> Glazed Donut</h1>
          <p className="my-3"> Calories: 540g</p>

          <div className="">
            <p className=""> Price</p>
            <p className=""> $3 Single</p>
            <p className=""> $12 Dozen</p>

            <p className=""> Quantity: </p>
            <input type="number" className="w-12" />

            <div className="my-12">
              <Link href="/cart">
                <a className="px-4 py-3 bg-primary rounded-def text-white font-primary font-semibold shadow-btn">
                  Add to Cart
                </a>
              </Link>
            </div>

            <p className="font-bold text-2xl">Total: $3.00 </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/static/donuts.png"
            width={400}
            height={400}
            className="rounded-def"
          />

          <div className="flex flex-col items-center my-10">
            <span className="underline font-semibold"> Nutritional Info </span>
            <p className=""> Sugar: 25g</p>
            <p className=""> Sugar: 3mg</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
