import type { NextPage } from "next";
import Link from "next/link";

const NavItem: NextPage<{ href: string; text: string }> = (props) => {
  const { href, text } = props;
  return (
    <li>
      <Link href={href}>
        <a className="transition-default hover:text-primary">{text}</a>
      </Link>
    </li>
  );
};

export default NavItem;
