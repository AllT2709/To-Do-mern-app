import React from "react";

function TaskItem({ task, deleteTask, updateTask }) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="ms2 me-auto">
          {task.completed == true ? (
            <div className="fw-bold">
              <s>
                <span>&#10004;</span>
                {task.task}
              </s>
            </div>
          ) : (
            <div className="fw-bold">
              <span>&#10004;</span> {task.task}
            </div>
          )}
        </div>
        <div>
          <button
            className="btn btn-warning mx-2"
            onClick={() => updateTask(task)}
          >
            &#9998;
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteTask(task._id)}
          >
            &#10799;
          </button>
        </div>
      </li>
    </>
  );
}

export default TaskItem;
