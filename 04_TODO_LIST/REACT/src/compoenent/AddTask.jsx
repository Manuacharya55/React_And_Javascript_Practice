import React from "react";

const AddTask = ({ handleSubmit, usertask, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="user-task"
        placeholder="add tasks"
        value={usertask}
        onChange={handleChange}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTask;
