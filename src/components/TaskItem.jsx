export default function TaskItem({
  text,
  handleToggleComplete,
  handleDeleteTask,
  task,
}) {
  return (
    <>
      <li className="text-center my-8">
        {task.completed ? `✔ ${text}` : text}
        <button
          className="button bg-green-900 mx-4"
          onClick={() => handleToggleComplete(task.id)}
        >
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button
          className="button bg-red-950"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}
