
const Task = ({ id, name, isCompleted, handleComplete, handleDelete }) => {
  return (
    <div className="todo">
      <div className="task">
        <input
          type="checkbox"
          name=""
          id={id}
          className="check-list"
          checked={isCompleted}
          onChange={() => handleComplete(id)}
        />
        <label id={id} className={isCompleted ? "done" : "not-done"}>
          {name}
        </label>
      </div>
      <button className="delete" id={id} onClick={() => handleDelete(id)}>
        x
      </button>
    </div>
  );
};

export default Task;
