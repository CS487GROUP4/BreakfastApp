import type { NextPage } from "next";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";

const Nav: NextPage = (props) => {
  function goHome() {
    window.location.href = "/";
  }
  return (
    <nav className="flex flex-row justify-between items-center p-5 bg-white">
      <Image
        className="cursor-pointer"
        src="/static/Logo-Medium.svg"
        width={64}
        height={64}
        onClick={goHome}
      />

      <ul className="text-2xl font-bold flex gap-5">
        <NavItem href="/menu" text="Menu" />
        <NavItem href="/rewards" text="Rewards" />
        <NavItem href="/" text="About Us" />
        <NavItem href="/" text="Contact" />
      </ul>

      <div className="flex gap-5">
        <Link href="/signin">
          <a className="btn"> Sign In</a>
        </Link>
        <Link href="/menu">
          <a className="btn "> Menu </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
