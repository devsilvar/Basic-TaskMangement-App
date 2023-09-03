import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoForm = ({ addTodo }) => {
  const [Task, setTask] = useState({
    name: "",
    DueDate: "",
  });

  document.querySelector("body").classList.add("bg-light");

  const handleform = (e) => {
    e.preventDefault();
    setTask({ ...Task, [e.target.id]: e.target.value });
  };

  function submitted(e) {
    e.preventDefault();
    addTodo(Task);
  }

  return (
    <>
      <div className="container">
        <p className="fs-4 text-center mt-3 fw-bold">Get Things Done!</p>
        <div className="row">
          <form
            className="col-10 col-md-5 col-lg-3 bg-white mt-2 mx-auto rounded shadow p-3"
            action="submit"
            onSubmit={submitted}
          >
            <div className="mb-3">
              <label htmlFor="Task" className="form-label">
                Enter the Task
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Task Name"
                value={Task.name}
                onChange={handleform}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Due Time Assigned" className="form-label">
                Select the Due Time
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="DueDate"
                value={Task.DueDate}
                onChange={handleform}
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning mx-auto w-100 mt-3"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
