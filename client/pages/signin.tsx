import type { NextPage } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SignIn: NextPage = () => {
  async function handleLogin(e: any) {
    e.preventDefault();
    alert("Form Submitted");
    const options = {
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };

    const res = await fetch("http://localhost:3005/login", options);

    const result = await res.json();
    e.target.username.value = "";
    e.target.password.value = "";
    console.log(result);
  }
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

      <form action="post" onSubmit={handleLogin}>
        <label> Username</label>
        <input type="text" name="username" id="username" />

        <label> Password </label>
        <input type="password" name="password" id="password" />

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
