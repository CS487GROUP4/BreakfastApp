import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const MenuItem: NextPage = () => {
  const router = useRouter();
  const category: any = router.query.category;
  const pageTitle = category?.charAt(0)?.toUpperCase() + category?.slice(1);

  return (
    <div className="bg-def">
      <Nav />
      <Breadcrumb current={pageTitle} />
      <h1 className=""> {pageTitle} </h1>
      <main className="grid grid-cols-3"></main>
      <Footer />
    </div>
  );
};

export default MenuItem;
