import type { NextPage } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import MenuSection from "../../components/MenuSection";

const Menu: NextPage = () => {
  return (
    <div className="bg-def">
      <Nav />
      <main className="py-12 flex flex-col items-center">
        <h1 className="font-bold font-primary text-4xl mb-10"> Menu Items</h1>
        <article className="grid grid-cols-2 gap-8">
          <MenuSection imgSrc="drinks.png" title="Drinks" />
          <MenuSection imgSrc="donuts.png" title="Donuts" />
          <MenuSection imgSrc="bagels.png" title="Bagels" />
          <MenuSection imgSrc="sandwiches.png" title="Sandwiches" />
          <MenuSection imgSrc="pancakes.png" title="Pancakes" />
          <MenuSection imgSrc="burritos.png" title="Burritos" />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
