import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "../../../components/Footer";
import MenuItem from "../../../components/MenuItem";
import Nav from "../../../components/Nav";

import storeData from "../../../data/store.json";
import categoryData from "../../../data/categories.json";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      // Get only the items where the currentPages URL is == category name
      items: storeData.filter((item) => {
        const categoryUrl =
          item.category.charAt(0).toLowerCase() + item.category.slice(1);
        return categoryUrl === params?.category;
      }),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = categoryData.map((category) => {
    const categoryUrl =
      category.category.charAt(0).toLowerCase() + category.category.slice(1);
    return {
      params: {
        category: categoryUrl.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

const MenuCategory: NextPage<{ items: any }> = ({ items }) => {
  const router = useRouter();
  const category: any = router.query.category;
  const pageTitle = category?.charAt(0).toUpperCase() + category?.slice(1);
  return (
    <div className="bg-def">
      <main className="">
        <Nav />
        <Breadcrumb current={pageTitle} />
        <h1 className="title">{pageTitle}</h1>
        {items.length > 0 ? (
          <section className="grid grid-cols-3 grid-rows-none gap-5 px-20 my-5">
            {items.map((item: any) => {
              return (
                <MenuItem
                  linkUrl={`/menu/${pageTitle.toLowerCase()}/${item.item
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  title={item.item}
                  imgSrc={item.imgUrl}
                  price={item.price}
                />
              );
            })}
          </section>
        ) : (
          <h1 className="text-4xl text-center"> Out of Items</h1>
        )}
        <Footer />
      </main>
    </div>
  );
};

export default MenuCategory;
