import type { NextPage } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import MenuSection from "../../components/MenuSection";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

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
  const router = useRouter();

  return (
    <div className="bg-def">
      <Nav />
      <main className="py-12 flex flex-col items-center">
        <h1 className="font-bold font-primary text-4xl mb-10"> Menu Items</h1>
        <article className="grid grid-cols-2 gap-8">
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <MenuSection
                  imgSrc={category.imgUrl}
                  title={category.category}
                />
              );
            })}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
