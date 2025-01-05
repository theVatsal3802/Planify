import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function NewTask({ handleAddTask }) {
  NewTask.propTypes = {
    handleAddTask: PropTypes.func.isRequired,
  };

  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    handleAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonText="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Task!</h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot to add some values
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to enter valid values for the task input field
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          placeholder="Enter new task here..."
          className="w-[16rem] bg-stone-200 px-2 py-1 rounded-sm"
          type="text"
          onChange={handleChange}
          value={enteredTask}
        />
        <Button onClick={handleClick}>Add Task</Button>
      </div>
    </>
  );
}
