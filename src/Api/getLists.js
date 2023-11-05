import axios from "axios";
const authInstance = axios.create({
  baseURL: "https://todos-36596-default-rtdb.firebaseio.com/",
  timeout: 1000,
});
export const getLists = async (url) => {
  try {
    const { data } = await authInstance("todos.json?print=pretty");
    const fetchedResults = [];
    for (let key in data) {
      const dataFormated = data[key]["lists"];
      for (let i in dataFormated) {
        fetchedResults.unshift({
          title: dataFormated[i]["title"],
        });
      }
      return [...fetchedResults];
    }
  } catch (err) {
    console.log(err);
  }
};
