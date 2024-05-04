import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { deleteTask, toggleComplete } from "../taskSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  // Checks if the task is marked as complete. If it is complete, renders a green tick before the task name
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  // Delete a task from the list
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="my-8">
      {tasks.map((task) => (
        <>
          <TaskItem
            key={task.id}
            text={task.text}
            task={task}
            handleToggleComplete={handleToggleComplete}
            handleDeleteTask={handleDeleteTask}
          ></TaskItem>
        </>
      ))}{" "}
    </ul>
  );
}
