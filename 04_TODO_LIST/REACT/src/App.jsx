import { useState } from "react";
import AddTask from "./compoenent/AddTask";
import Task from "./compoenent/Task";
import { useEffect } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [parameter, setParameter] = useState("all");
  const [usertask, setUserTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usertask) {
      const data = {
        id: Date.now(),
        name: usertask,
        isCompleted: false,
      };

      setTask((prev) => {
        return [...prev, data];
      });

      setUserTask("");
    }
  };

  const handleFilter = (e) => {
    setParameter(e.target.value);
  };

  const handleChange = (e) => {
    setUserTask(e.target.value);
  };

  const handleComplete = (id) => {
    setTask((prev) => {
      return prev.map((curele) => {
        if (curele.id == id) {
          return { ...curele, isCompleted: !curele.isCompleted };
        }
        return curele;
      });
    });
  };

  const handleDelete = (id) => {
    setTask((prev) => {
      return prev.filter((curele) => curele.id !== id);
    });
  };

const filteredTasks = task.filter((t) => {
  if (parameter === "active") return !t.isCompleted;
  if (parameter === "completed") return t.isCompleted;
  return true; // "all"
});

  return (
    <div id="container">
      <h1>TODO</h1>

      <AddTask
        handleSubmit={handleSubmit}
        usertask={usertask}
        handleChange={handleChange}
      />

      <div id="filter-holder">
        <select name="" id="filter" onChange={handleFilter}>
          <option value="all">all</option>
          <option value="active">active</option>
          <option value="completed">completed</option>
        </select>
      </div>

      <div id="list-holder">
        {filteredTasks.length > 0
  ? filteredTasks.map((t) => (
      <Task
        key={t.id}
        id={t.id}
        name={t.name}
        isCompleted={t.isCompleted}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    ))
  : "No Tasks"}
      </div>
    </div>
  );
}

export default App;
