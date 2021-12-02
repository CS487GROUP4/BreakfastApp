import type { NextPage } from "next";
import Image from "next/image";
import OrderDetails from "./OrderDetails";

const CartItem: NextPage<{
  imgSrc: string;
}> = ({ imgSrc }) => {
  return (
    <article className="flex bg-white p-4 shadow-card rounded-def">
      <div className="mr-5">
        <Image
          className="cursor-pointer rounded-def"
          src={`/static/${imgSrc}`}
          width={150}
          height={150}
        />
      </div>

      <OrderDetails
        title="Glazed Donut"
        options="Single"
        quantity={3}
        price={3.0}
      />

      <div className="relative">
        <a className=" underline cursor-pointer text-error font-semibold absolute bottom-0 right-0">
          Edit
        </a>
      </div>
    </article>
  );
};

export default CartItem;
