const usertask = document.querySelector("#user-task");
const submit = document.querySelector("#submit");
const taskholder = document.querySelector("#list-holder");
const filter = document.querySelector("#filter");
let filterParameter = "all";

let taskarray = [];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  taskarray.push({
    id: Date.now(),
    name: usertask.value,
    isCompleted: false,
  });
  usertask.value = "";
  renderTask();
});

filter.addEventListener("change", (e) => {
  filterParameter = e.target.value;
  renderTask();
});

const renderTask = () => {
  taskholder.innerHTML = "";

  if (filterParameter == "all") {
    renderArray = taskarray;
  } else if (filterParameter == "active") {
    renderArray = taskarray.filter((curele) => !curele.isCompleted);
  } else {
    renderArray = taskarray.filter((curele) => curele.isCompleted);
  }

  if (taskarray.length != 0) {
    renderArray.forEach((curele) => {
      taskholder.innerHTML += `
        <div class="todo">
            <div class="task">
              <input type="checkbox" name="" id="${
                curele.id
              }" class="check-list" ${curele.isCompleted && "checked"}/>
              <label id=${curele.id} class=${curele.isCompleted && "done"}>${
        curele.name
      }</label>
            </div>
            <button class="delete" id=${curele.id}>x</button>
        </div>
        `;
    });
  } else {
    taskholder.innerHTML = "No Task";
  }

  mountEvents();
};

const mountEvents = () => {
  handleTaskComplete();
  handleDelete();
};

const handleTaskComplete = () => {
  const checkbox = document.querySelectorAll(".check-list");
  checkbox.forEach((curele) => {
    curele.addEventListener("change", (e) => {
      taskarray = taskarray.map((curele) => {
        if (curele.id == e.target.id) {
          return { ...curele, isCompleted: !curele.isCompleted };
        }

        return curele;
      });

      renderTask();
    });
  });
};

const handleDelete = () => {
  const deleteTask = document.querySelectorAll(".delete");

  deleteTask.forEach((curele) => {
    curele.addEventListener("click", (e) => {
      taskarray = taskarray.filter((curele) => curele.id != e.target.id);
    });
    renderTask();
  });
};

renderTask();
