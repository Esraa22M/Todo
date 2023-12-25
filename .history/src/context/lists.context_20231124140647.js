import { createContext, useLayoutEffect, useState } from "react";
import { getTodosAndDocuments } from "../Api/firebase.utils";
export const ListsContext = createContext({
  lists: [],
  tasks:[]
});

export const ListsProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([]);
    useLayoutEffect(() => {
    const getTodos = async () => {
      const todos = await getTodosAndDocuments();      console.log(Object.values(todos))

      setLists([...Object.keys(todos)]);
      setTasks([...Object.keys(todos)])
    };
    getTodos();
  }, []);
  const value = { lists, setLists , tasks , setTasks};
  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
