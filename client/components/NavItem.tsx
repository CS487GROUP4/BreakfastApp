import type { NextPage } from "next";
import Link from "next/link";

const NavItem: NextPage<{ href: string; text: string }> = (props) => {
  const { href, text } = props;
  return (
    <li>
      <Link href={href}>
        <a className="">{text}</a>
      </Link>
    </li>
  );
};

export default NavItem;
