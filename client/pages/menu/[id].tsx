import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const MenuItem: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className=""> {router.query.id}</h1>
    </div>
  );
};

export default MenuItem;
