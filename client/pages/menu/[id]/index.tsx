import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
const Item: NextPage = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const pageTitle = id?.charAt(0)?.toUpperCase() + id?.slice(1);

  return (
    <div className="bg-def">
      <Nav />
      <h1 className=""> {pageTitle} </h1>
      <main className="grid grid-cols-3"></main>
      <Footer />
    </div>
  );
};

export default Item;
