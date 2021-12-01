import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import MenuItem from "../../components/MenuItem";
import Nav from "../../components/Nav";

const MenuCategory: NextPage = () => {
  const router = useRouter();
  const category: any = router.query.category;
  const pageTitle = category?.charAt(0)?.toUpperCase() + category?.slice(1);

  return (
    <div className="bg-def">
      <main>
        <Nav />
        <Breadcrumb current={pageTitle} />
        <h1 className="title">{pageTitle}</h1>

        <section className="grid grid-cols-3 grid-rows-none gap-5 px-20 my-5">
          <MenuItem title="Chocolate Donut" imgSrc="donuts.png" price={3.0} />
          <MenuItem title="Strawberry Donut" imgSrc="donuts.png" price={3.0} />
          <MenuItem title="Apple Fritter" imgSrc="donuts.png" price={3.0} />
          <MenuItem title="Apple Fritter" imgSrc="donuts.png" price={3.0} />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default MenuCategory;
