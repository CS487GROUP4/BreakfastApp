import type { NextPage } from "next";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import storeData from "../../../data/store.json";

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {},
//   };
// };

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = storeData.map((items) => {
    const nameUrl = items.item.replace(/ /g, "-");
    return {
      params: {
        item: nameUrl,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

const Item: NextPage = (props) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div className="bg-def">
      <h1>{id}</h1>
    </div>
  );
};

export default Item;
