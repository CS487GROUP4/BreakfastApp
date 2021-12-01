import type { NextPage } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SignIn: NextPage = () => {
  return (
    <main className="bg-def">
      <Nav />
      <h1 className=""> Sign in or create an account</h1>
      <h2 className="">
        Save your orders, earn points, and redeem rewards with a bhole account
      </h2>
      <button type="submit" className="">
        Sign in with Google
      </button>

      <form action="post">
        <label> Email</label>
        <input type="email" name="" id="" />

        <label> Password </label>
        <input type="password" name="" id="" />

        <button type="submit"> Sign In</button>
      </form>
      <p className=""> Don't have an account?</p>
      <Link href="/register">
        <a className="underline"> Create an account</a>
      </Link>
      <Footer />
    </main>
  );
};

export default SignIn;
