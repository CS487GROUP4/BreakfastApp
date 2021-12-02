import type { NextPage } from "next";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";

const Nav: NextPage<{ isBrowsing?: boolean }> = ({ isBrowsing }) => {
  function handleLogoClick() {
    window.location.href = "/";
  }
  return (
    <nav className="relative flex flex-row justify-between items-center p-5 bg-white shadow-nav font-primary">
      <Image
        className="cursor-pointer"
        src="/static/Logo-Medium.svg"
        width={64}
        height={64}
        onClick={handleLogoClick}
      />

      <ul className="text-xl font-medium flex gap-10">
        <NavItem href="/menu" text="Menu" />
        <NavItem href="/rewards" text="Rewards" />
        <NavItem href="/" text="About Us" />
        <NavItem href="/" text="Contact" />
      </ul>

      <div className="">
        <Link href="/signin">
          <a className="btn btn-def-hover text-black bg-white border border-black py-1.5 mr-4 font-semibold">
            Sign In
          </a>
        </Link>
        {isBrowsing ? (
          <Link href="/menu">
            <a className="btn bg-secondary py-3 hover:bg-secondary_light transition-all duration-100 font-semibold">
              Order Now
            </a>
          </Link>
        ) : (
          <Link href="/cart">
            <a className="btn bg-primary py-3 transition-all duration-100 font-semibold">
              🛒 Cart
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
