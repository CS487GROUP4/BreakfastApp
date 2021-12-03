import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import itemData from "../../../data/store.json";
import categoryData from "../../../data/categories.json";
import Breadcrumb from "../../../components/Breadcrumb";
import Image from "next/image";
import Link from "next/dist/client/link";
import { useContext } from "react";
import { StoreContext } from "../../_app";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log({ params });
  return {
    props: {
      items: itemData.filter((item) => {
        const itemUrl = item.item.toLowerCase().replace(/\s/g, "-");
        return itemUrl === params?.item;
      }),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = itemData.map((item) => {
    const itemUrl = item.item.toLowerCase().replace(/\s/g, "-");
    const categoryUrl =
      item.category.charAt(0).toLowerCase() + item.category.slice(1);
    return {
      params: {
        category: categoryUrl,
        item: itemUrl,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

const Item: NextPage<{ items: any }> = ({ items }) => {
  const { state } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);
  const { item: name, category: ctgyName, imgUrl, price } = items[0];
  const router = useRouter();

  const { item, category } = router.query;
  function addToCart() {
    const total = price * quantity;
    alert(`Added $${total} to Cart`);
  }
  function changeQuantity(e: any) {
    setQuantity(e.target.value);
  }

  return (
    <div className="bg-def">
      <Nav loggedIn={state.admin} />
      <Breadcrumb current={`${ctgyName} / ${name}`} />
      <h1 className="title my-12"> Item Information </h1>
      <div className="flex justify-evenly">
        <div className="text-center">
          <h1 className="font-bold text-4xl"> {name}</h1>
          <p className="my-3"> Calories: 540g</p>

          <div className="">
            <p className="font-bold text-2xl"> Price</p>
            <p className="text-xl"> $ {price}</p>

            <p className="font-bold my-3 text-2xl"> Quantity: </p>
            <input
              type="number"
              className="w-12 text-center text-xl border border-black"
              value={quantity}
              onChange={changeQuantity}
            />

            <div className="my-12">
              <Link href="/cart">
                <a
                  onClick={addToCart}
                  className="px-4 py-3 bg-primary rounded-def text-white font-primary font-semibold shadow-btn"
                >
                  Add to Cart
                </a>
              </Link>
            </div>

            <p className="font-bold text-2xl">Total: ${price * quantity} </p>
          </div>
        </div>
        <div className="">
          <Image
            src={`/static/${imgUrl}`}
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

export default Item;
