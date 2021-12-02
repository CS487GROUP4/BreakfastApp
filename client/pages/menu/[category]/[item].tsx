import type { NextPage } from "next";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {},
//   };
// };

// export const getStaticPaths: GetStaticPaths = async (context) => {
//   const paths = storeData.map((items) => {
//     const nameUrl = items.item.replace(/ /g, "-");
//     return {
//       params: {
//         id: nameUrl,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// };

const Item: NextPage = (props) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Item;
