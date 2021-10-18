import axios from "axios";

const URI = "http://localhost:3001/tasks";
//const URI = "/tasks";

export const getTasks = async () => {
  const response = await axios.get(URI);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(URI, task);
  return response.data;
};

export const putTask = async (id, task) => {
  await axios.put(`${URI}/${id}`, task);
};

export const deleteTask = async (id) => {
  await axios.delete(`${URI}/${id}`);
};
