import React from "react";

import Task from "./components/task";

const App = () => {
  return (
    <div className="container mt-5 col-md-5">
      <h1 className="text-center">To-Do App</h1>
      <div className="card">
        <Task />
      </div>
    </div>
  );
};

export default App;
