import type { NextPage } from "next";
import Link from "next/link";

const NavItem: NextPage<{ href: string; text: string; style?: string }> = ({
  href,
  text,
  style,
}) => {
  return (
    <li className={style}>
      <Link href={href}>
        <a className="transition-default hover:text-primary">{text}</a>
      </Link>
    </li>
  );
};

export default NavItem;
