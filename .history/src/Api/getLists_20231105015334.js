import axios from "axios";
const authInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 1000,
});
export const getLists = async (url) => {
  try {
    const { data } = await authInstance("todos");
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
