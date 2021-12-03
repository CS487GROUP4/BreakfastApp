import type { NextPage } from "next";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { StoreContext } from "../pages/_app";

const Nav: NextPage<{ isBrowsing?: boolean }> = ({ isBrowsing }) => {
  const { state } = useContext(StoreContext);

  const { cart, admin } = state;

  return (
    <nav className="relative flex flex-row justify-between items-center p-5 bg-white shadow-nav font-primary">
      <Link href="/">
        <a>
          <Image
            className="cursor-pointer"
            src="/static/Logo-Medium.svg"
            width={64}
            height={64}
          />
        </a>
      </Link>

      <ul className="text-xl font-medium flex gap-10">
        <NavItem href="/menu" text="Menu" />
        <NavItem href="/rewards" text="Rewards" />
        <NavItem href="/" text="About Us" />
        <NavItem href="/" text="Contact" />
      </ul>

      <div className="">
        {!admin ? (
          <Link href="/signin">
            <a className="btn btn-def-hover text-black bg-white border border-black py-1.5 mr-4 font-semibold">
              Sign In
            </a>
          </Link>
        ) : (
          <p className=" text-black py-1.5 mr-4 font-semibold">
            Welcome, Manager
          </p>
        )}

        {isBrowsing ? (
          <Link href="/menu">
            <a className="btn bg-secondary py-3 hover:bg-secondary_light transition-all duration-100 font-semibold">
              Order Now
            </a>
          </Link>
        ) : (
          <Link href="/cart">
            <a className="relative btn bg-primary py-3 transition-all duration-100 font-semibold">
              🛒 Cart
              <span className="absolute right-3 -top-3.5 px-2 rounded-circle bg-black border border-white">
                <span className="text-xs">{cart.length}</span>
              </span>
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
