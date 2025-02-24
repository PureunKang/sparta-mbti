const Button = ({ children, className = "", ...props }) => {
  return (
    <button className={`text-sm px-4 py-2 rounded-md ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
