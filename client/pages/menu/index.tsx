import type { NextPage } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import MenuSection from "../../components/MenuSection";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { useContext } from "react";
import { StoreContext } from "../_app";

import categoryData from "../../data/categories.json";

interface Data {
  id: number;
  category: string;
  imgUrl: string;
}

export const getStaticProps: GetStaticProps = (context) => {
  const data = categoryData.map((category) => category);
  return {
    props: {
      categories: data,
    },
  };
};

const Menu: NextPage<{ categories: Data[] }> = ({ categories }) => {
  const { state } = useContext(StoreContext);
  const isManager = state.admin.role === "manager";

  const router = useRouter();

  return (
    <div className="bg-def">
      <Nav loggedIn={state.admin} />
      <main className="py-12 flex flex-col items-center">
        <h1 className="font-bold font-primary text-4xl mb-10"> Menu Items</h1>
        <article className="grid grid-cols-2 gap-8">
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <MenuSection
                  key={category.id}
                  imgSrc={category.imgUrl}
                  title={category.category}
                />
              );
            })}
        </article>
        {isManager && (
          <div className="mt-5 w-1/2 flex justify-evenly">
            <Link href="/reports">
              <a className="bg-red-700 text-white font-bold py-2 px-3 rounded-lg">
                View Reports
              </a>
            </Link>

            <a className="bg-red-700 text-white font-bold py-2 px-3 rounded-lg">
              Edit Items
            </a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
