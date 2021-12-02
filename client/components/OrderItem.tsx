import type { NextPage } from "next";
import Image from "next/image";

const OrderItem: NextPage<{
  title: string;
  imgSrc: string;
  options: string;
  quantity: number;
  price: number;
}> = ({ title, imgSrc, options, quantity, price }) => {
  return (
    <article className="">
      <Image
        className="cursor-pointer"
        src={`/static/${imgSrc}`}
        width={400}
        height={250}
      />
      <div className="">
        <h1 className=""> {title}</h1>
        {options && <h2 className=""> {options}</h2>}

        <p className="">Quantity: {quantity}</p>
      </div>

      <div className="">
        <span className=""> ${price} </span>
        <a className=""> Edit</a>
      </div>
    </article>
  );
};

export default OrderItem;
