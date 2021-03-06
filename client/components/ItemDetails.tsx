import type { NextPage } from "next";
import Image from "next/image";

const ItemDetails: NextPage<{ title: string; imgSrc: string; price: number }> =
  ({ title, imgSrc, price }) => {
    function handleImageClick() {
      window.location.href = "";
    }
    return (
      <article className="rounded-def shadow-card overflow-hidden">
        <Image
          className="cursor-pointer"
          src={`/static/${imgSrc}`}
          width={300}
          height={200}
        ></Image>
        <h1 className="font-secondary font-bold text-center text-2xl">
          {title}
        </h1>
        <p className=""> Price: ${price}</p>
      </article>
    );
  };

export default ItemDetails;
