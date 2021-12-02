import type { NextPage } from "next";

const OrderDetails: NextPage<{
  title: string;
  options: string;
  quantity: number;
  price: number;
}> = ({ title, options, quantity, price }) => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col justify-between">
        <div className="">
          <h1 className="text-2xl font-bold"> {title}</h1>
          {options && <h2 className="text-sm"> {options}</h2>}
        </div>
        <p className="font-medium">Quantity: {quantity}</p>
      </div>

      <span className="font-bold text-lg mt-1"> ${price} </span>
    </div>
  );
};

export default OrderDetails;
