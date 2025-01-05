import PropTypes from "prop-types";
import Tasks from "./Tasks";

export default function Project({
  project,
  handleDeleteProject,
  handleDeleteTask,
  handleAddTask,
  tasks,
}) {
  Project.propTypes = {
    project: PropTypes.object.isRequired,
    handleDeleteProject: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handleAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array,
  };

  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={handleDeleteProject}
            className="text-stone-200 px-4 py-2 text-xs ms:text-base rounded-md bg-red-700 hover:bg-red-800 hover:text-stone-100 transition-colors duration-100"
          >
            Delete Project
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        handleDeleteTask={handleDeleteTask}
        handleAddTask={handleAddTask}
        tasks={tasks}
        selectedProjectId={project.id}
      />
    </div>
  );
}
