import type { NextPage } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

const Register: NextPage = () => {
  const [error, setError] = useState(null);
  async function handleLogin(e: any) {
    e.preventDefault();
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

    const res = await fetch("http://localhost:3005/register", options);
    const result = await res.json();
    alert(result.message);

    e.target.username.value = "";
    e.target.password.value = "";
  }
  return (
    <main className="bg-def">
      <Nav />
      <div className="h-screen">
        <div className="flex flex-col items-center">
          <div className="mt-10">
            <h1 className="text-3xl font-bold"> Register</h1>
            <h2 className="font-medium text-xl">
              Save your orders, earn points, and redeem rewards with a bhole
              account
            </h2>
          </div>
          <button
            type="submit"
            className="font-semibold border border-black bg-white rounded-lg px-3 py-1 my-3 hover:bg-secondary hover:text-white"
          >
            Register with Google
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

            <button
              type="submit"
              className="bg-secondary text-white font-bold py-1 mt-5 rounded-lg hover:bg-secondary_light"
            >
              Register
            </button>
          </form>
          <div className="flex my-2">
            <p className=""> Have an account?</p>
            <Link href="/signin">
              <a className="underline"> Sign in</a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Register;
