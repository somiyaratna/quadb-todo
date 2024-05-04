import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";
import TaskList from "./components/TaskList";

const App = () => {
  // The task that would be added.
  const [text, setText] = useState("");

  // Dispatch variables for the actions in taskSlice
  const dispatch = useDispatch();

  // This helps in changing the
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  //Add a new Task
  const handleAddTask = (e) => {
    if (text || e.keyCode === 13) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl my-16">Welcome to QuadB To-Do</h1>
      <form className="w-9/12 text-center">
        <input
          className="w-6/12 bg-neutral-600 focus:outline-none focus:ring focus:ring-slate-50 mx-8 placeholder:text-stone-50 h-8 rounded-md my-4 p-4 focus:scale-105 focus:transition-all"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter a Task"
        />
        <br />
        <button className="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
      <TaskList />
    </div>
  );
};

export default App;
