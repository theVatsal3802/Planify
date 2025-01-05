import PropTypes from "prop-types";
import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  projects,
  handleSelectProject,
  selectedProjectId,
}) {
  Sidebar.propTypes = {
    onStartAddProject: PropTypes.func,
    projects: PropTypes.array,
    handleSelectProject: PropTypes.func,
    selectedProjectId: PropTypes.number,
  };
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let classes =
            "w-full text-left px-4 py-1 rounded-md my-2 hover:text-stone-200 hover:bg-stone-800 transition-colors duration-100";
          if (project.id === selectedProjectId) {
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => handleSelectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
