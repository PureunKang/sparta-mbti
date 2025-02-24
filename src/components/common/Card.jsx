const Card = ({ title, children }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm  p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

export default Card;
