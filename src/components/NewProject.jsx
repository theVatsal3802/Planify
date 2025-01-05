import PropTypes from "prop-types";
import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ handleAddProject, handleCancelClick }) {
  NewProject.propTypes = {
    handleAddProject: PropTypes.func.isRequired,
    handleCancelClick: PropTypes.func.isRequired,
  };

  const title = useRef();
  const desc = useRef();
  const date = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const projectData = {
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    };
    handleAddProject(projectData);
  }

  return (
    <>
      <Modal ref={modal} buttonText="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid Input!
        </h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot to add some values
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to enter valid values for all the input fields
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleCancelClick}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" isTextArea={false} type="text" />
          <Input ref={desc} label="Description" isTextArea={true} />
          <Input ref={date} label="Due Date" isTextArea={false} type="date" />
        </div>
      </div>
    </>
  );
}
