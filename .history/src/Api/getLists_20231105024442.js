import axios from "axios";
const authInstance = axios.create({
  baseURL: "https://todos-36596-default-rtdb.firebaseio.com/",
  timeout: 1000,
});
export const getLists = async (url) => {
  try {
    const { data } = await authInstance("todos.json");
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
