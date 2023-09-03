import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoListWrapper = () => {
  const [TaskList, setTaskList] = useState([]);
  const [uid, setuid] = useState(0);
  const [complete, setcomplete] = useState();

  const addTodo = (value) => {
    setuid(new Date().getMilliseconds());
    setTaskList([
      ...TaskList,
      { id: value.name + uid, task: value, completed: value.completed },
    ]);
  };

  const toogleComplete = (id) => {
    setTaskList(
      TaskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const DeleteTask = (id) => {
    setTaskList(TaskList.filter((task) => task.id !== id));
  };
  console.log(TaskList);

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <table className="mx-auto container mt-5">
        {TaskList.length == 0 ? (
          <p className="text-center mx-auto fs-4">No Task Added Yet</p>
        ) : (
          <>
            <thead>
              <tr>
                <th>Task</th>

                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="position-relative">
              {TaskList.map((item, index) => (
                <Todo
                  task={item}
                  key={index}
                  toogleComplete={toogleComplete}
                  DeleteTask={DeleteTask}
                  complete={complete}
                />
              ))}
            </tbody>
          </>
        )}
      </table>
    </>
  );
};

export default TodoListWrapper;
