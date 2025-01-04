import PropTypes from "prop-types";

export default function Button({ children, ...props }) {
  Button.propTypes = {
    children: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  };
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs ms:text-base rounded-md bg-stone-700 text-stone-100 hover:bg-stone-600 hover:text-stone-200"
    >
      {children}
    </button>
  );
}
