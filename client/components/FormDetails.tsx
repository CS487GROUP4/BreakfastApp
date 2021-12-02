import type { NextPage } from "next";

const FormDetails: NextPage<{ label: string; inputType: string }> = ({
  label,
  inputType,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-md"> {label}</label>
      <input
        type={inputType}
        className="border border-black rounded-md p-0.5"
      />
    </div>
  );
};

export default FormDetails;
