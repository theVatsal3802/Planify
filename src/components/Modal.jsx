import PropTypes from "prop-types";
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({ ref, children, buttonText }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  Modal.propTypes = {
    children: PropTypes.any,
    ref: PropTypes.any,
    buttonText: PropTypes.string.isRequired,
  };

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonText}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
