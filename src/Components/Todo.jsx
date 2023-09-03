import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toogleComplete, DeleteTask, complete }) => {
  const [checked, setchecked] = useState();

  let ccc;
  const handleChecked = () => {
    // if (event.target.checked) {
    //   task.completed = true;
    //   setchecked(task.completed);
    // } else {
    //   toogleComplete(task.id);
    //   task.completed = false;
    //   setchecked(task.completed);
    // }
    toogleComplete(task.id);

    console.log(task);
  };

  const handleDelete = () => {
    DeleteTask(task.id);
    // if (task.completed == true) {
    //   event.target.checked == true;
    // } else {
    //   event.target.checked == true;
    // }
    console.log(checked);
    // if (event.target.checked) {
    // } else {
    // }
  };

  return (
    <>
      <tr
        className={
          task.completed
            ? "completed shadow rounded"
            : "bg-white shadow rounded border"
        }
      >
        <td className="p-3">
          {" "}
          <input
            type="checkbox"
            name=""
            onClick={handleChecked}
            checked={task.completed}
            className="me-2"
            id="tastBox"
          />{" "}
          {task?.task.name}
        </td>

        <td>{new Date(task?.task.DueDate).toLocaleString()}</td>

        <td>
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            style={{ color: "#e40707" }}
            onClick={handleDelete}
          />
        </td>
      </tr>
    </>
  );
};

export default Todo;
