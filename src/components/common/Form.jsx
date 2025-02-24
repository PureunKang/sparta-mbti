const Form = ({ onSubmit, children, className = "", ...props }) => {
  return (
    <>
      <form onSubmit={onSubmit} {...props} className={`space-y-4 ${className}`}>
        {children}
      </form>
    </>
  );
};

export default Form;
