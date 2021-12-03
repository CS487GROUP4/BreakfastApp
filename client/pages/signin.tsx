import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useContext } from "react";
import { StoreContext, ACTION_TYPES } from "./_app";

const SignIn: NextPage = () => {
  const [error, setError] = useState(null);
  const { dispatch, state } = useContext(StoreContext);

  async function handleLogin(e: any) {
    e.preventDefault();
    // Request information
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

    // Make request for login endpoint
    const res = await fetch("http://localhost:3005/login", options);
    const result = await res.json();
    const { status, message } = result;
    if (status === 403) {
      setError(message);
      alert(message);
      return;
    }
    // Update global state on successful login to get login data
    dispatch({
      type: ACTION_TYPES.IS_ADMIN,
      payload: {
        admin: message,
      },
    });

    // Reset form
    e.target.username.value = "";
    e.target.password.value = "";

    // Direct to menu
    Router.push("/menu");
  }
  return (
    <main className="bg-def">
      <Nav />
      <div className="h-screen">
        <div className="flex flex-col items-center">
          <div className="mt-10">
            <h1 className="text-3xl font-bold">Sign in or create an account</h1>
            <h2 className="font-medium text-xl">
              Save your orders, earn points, and redeem rewards with a bhole
              account
            </h2>
          </div>
          <button
            type="submit"
            className="font-semibold border border-black bg-white rounded-lg px-3 py-1 my-3 hover:bg-secondary hover:text-white"
          >
            Sign in with Google
          </button>

          <form action="post" onSubmit={handleLogin} className="flex flex-col">
            <label className="font-bold text-xl mb-1"> Username</label>
            <input
              className="border border-black rounded px-1 py-1"
              type="text"
              name="username"
              autoComplete="username"
              id="username"
            />

            <label className="font-bold text-xl mb-1"> Password </label>
            <input
              className="border border-black rounded px-1 py-1"
              type="password"
              name="password"
              autoComplete="current-password"
              id="password"
            />

            {error && <p>{error}</p>}
            <button
              type="submit"
              className="bg-secondary text-white font-bold py-1 mt-5 rounded-lg hover:bg-secondary_light"
            >
              Sign In
            </button>
          </form>
          <div className="flex my-2">
            <p className=""> Don't have an account?</p>
            <Link href="/register">
              <a className="underline"> Create an account</a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default SignIn;
