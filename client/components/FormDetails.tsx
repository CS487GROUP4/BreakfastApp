import type { NextPage } from "next";

const FormDetails: NextPage<{ label: string; inputType: string }> = ({
  label,
  inputType,
}) => {
  return (
    <div>
      <label> {label}</label>
      <input type={inputType} className="" />
    </div>
  );
};

export default FormDetails;
