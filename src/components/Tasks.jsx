import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import NewTask from "./NewTask";

export default function Tasks({
  tasks,
  handleAddTask,
  handleDeleteTask,
  selectedProjectId,
}) {
  Tasks.propTypes = {
    handleAddTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    tasks: PropTypes.array,
    selectedProjectId: PropTypes.number,
  };

  const displayedTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask handleAddTask={handleAddTask} />
      {displayedTasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet. <br /> Get started by adding
          some.
        </p>
      ) : (
        <ul className="py-1 px-4 mt-8 rounded-md bg-stone-100">
          {displayedTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-red-700 hover:text-red-500"
                onClick={() => handleDeleteTask(task.id)}
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
