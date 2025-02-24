import { COLORS } from "../../constants/styles";

const Input = ({ ...props }) => {
  return (
    <>
      <div className="flex flex-col space-y-1">
        <input
          {...props}
          className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2"
          style={{ "--tw-ring-color": COLORS.BLUE }}
        />
      </div>
    </>
  );
};

export default Input;
