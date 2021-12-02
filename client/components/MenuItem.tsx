import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const MenuItem: NextPage<{
  title: string;
  imgSrc: string;
  price: number;
  linkUrl: string;
}> = ({ title, imgSrc, price, linkUrl }) => {
  function handleImageClick() {
    window.location.href = "";
  }
  return (
    <article className="rounded-def shadow-card overflow-hidden text-center bg-white">
      <a>
        <Link href={linkUrl}>
          <Image
            className="cursor-pointer"
            src={`/static/${imgSrc}`}
            width={400}
            height={250}
          />
        </Link>
      </a>
      <h1 className="font-secondary font-bold text-center text-2xl">{title}</h1>
      <p className="mb-3 font-secondary"> Price: ${price}</p>
      <div className="my-5">
        <Link href="/cart">
          <a className="px-4 py-3 bg-primary rounded-def text-white font-primary font-semibold">
            Add to Cart
          </a>
        </Link>
      </div>
    </article>
  );
};

export default MenuItem;
