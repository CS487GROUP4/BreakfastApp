import type { NextPage } from "next";
import NavItem from "./NavItem";

const Breadcrumb: NextPage<{ current: any }> = ({ current }) => {
  const isOnCurrentPage = current;
  return (
    <ul className="px-3 py-4 flex font-secondary font-semibold">
      <NavItem href="/menu" text="Menu" style="text-error ml-1" />
      <p className="mx-1"> / </p>
      {current ? <li> {current} </li> : ""}
    </ul>
  );
};

export default Breadcrumb;
