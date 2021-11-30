import type { NextPage } from "next";
import Image from "next/image";

const MenuSection: NextPage<{ title: string; imgSrc: string }> = ({
  title,
  imgSrc,
}) => {
  function handleImageClick() {
    window.location.href = `/menu/${title.toLowerCase()}`;
  }
  return (
    <article className="rounded-def shadow-card overflow-hidden">
      <Image
        className="cursor-pointer"
        src={`/static/${imgSrc}`}
        width={300}
        height={200}
        onClick={handleImageClick}
      ></Image>
      <h1 className="font-secondary font-bold text-center text-2xl">{title}</h1>
    </article>
  );
};

export default MenuSection;
