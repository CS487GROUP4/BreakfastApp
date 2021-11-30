import type { NextPage } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-def">
      <Head>
        <title> Bhole App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="block relative p-20 h-screen">
        <h1 className="font-logo text-5xl mb-8 text-primary"> Bhole</h1>
        <h2 className="font-primary text-4xl font-bold w-5/12 mb-5">
          Breakfast tastes better when its round
        </h2>
        <h3 className="font-secondary text-3xl w-1/3 mb-12">
          Grab some donuts, bagels, or other breakfast cravings
        </h3>

        <Link href="/menu">
          <a className="mt-5 px-8 py-4 bg-secondary text-white rounded-def font-primary font-bold hover:bg-secondary_light transition-default">
            Order Now
          </a>
        </Link>

        <div className="absolute right-10 top-5">
          <Image src="/static/HeroDonut.svg" width={600} height={600} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
