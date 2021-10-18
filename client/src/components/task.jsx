import React, { useState, useEffect } from "react";

import TaskItem from "./taskItem";
import {
  addTask,
  getTasks,
  deleteTask,
  putTask,
} from "../../services/taskServices";

const Task = () => {
  const [task, setTask] = useState([]);
  const [idTask, setidTask] = useState("");
  const [currentTask, setCurrentTask] = useState({
    task: "",
    completed: false,
  });

  const fetchData = async () => {
    try {
      const data = await getTasks();
      setTask(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  /* useEffect(() => {
    if (updateTask) {
      setCurrentTask({
        task: updateTask.task,
        completed: updateTask.completed,
      });
    }
  }, [updateTask]); */

  const handleTaskChange = (e) => {
    setCurrentTask({
      ...currentTask,
      [e.target.name]:
        [e.target.name] == "completed" ? e.target.checked : e.target.value,
    });
  };

  const TaskAdd = async (e) => {
    e.preventDefault();
    if (idTask) {
      await putTask(idTask, currentTask);
      setidTask("");
    } else {
      const data = await addTask(currentTask);
    }
    //setTask(task.concat(data)); //puete der asi tambien, pero no se cual es mejor practica
    await fetchData();
    setCurrentTask({
      task: "",
      completed: false,
    });
  };

  const taskToDelete = async (id) => {
    await deleteTask(id);
    //await fetchData();//puede ser asi tambien, pero no se cual es mejor practica
    let originalList = task;
    originalList = originalList.filter((t) => t._id != id);
    setTask(originalList);
  };

  /* const taskUpdate = (taskUp) => {
    setUpdateTask(taskUp);
  };
 */
  const taskUpdate = (taskUp) => {
    if (taskUp) {
      setCurrentTask({
        task: taskUp.task,
        completed: taskUp.completed,
      });
      setidTask(taskUp._id);
    }
  };

  const TaskForm = () => {
    return (
      <form
        onSubmit={TaskAdd}
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <div className="mb-3">
            <input
              type="text"
              name="task"
              className="form-control"
              placeholder="add task..."
              value={currentTask.task}
              onChange={handleTaskChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              name="completed"
              id="check"
              className="form-check-label"
              onChange={handleTaskChange}
              checked={currentTask.completed ? currentTask.completed : false}
            />
            {/* <label htmlFor="check">Completed</label> */}
          </div>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    );
  };

  return (
    <>
      <div className="card-header" style={{ background: "#96dcf1" }}>
        {TaskForm()}
      </div>
      <div className="card-body" style={{ background: "#d1d2d3" }}>
        <ul className="list-group">
          {task.map((t) => (
            <TaskItem
              key={t._id}
              task={t}
              deleteTask={taskToDelete}
              updateTask={taskUpdate}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Task;
