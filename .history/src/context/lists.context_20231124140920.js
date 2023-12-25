import { createContext, useLayoutEffect, useState } from "react";
import { getTodosAndDocuments } from "../Api/firebase.utils";
export const ListsContext = createContext({
  lists: [],
  tasks:[]
});

export const ListsProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [listsTitles, setListsTitles] = useState([]);
    useLayoutEffect(() => {
    const getTodos = async () => {
      const todos = await getTodosAndDocuments();

      setListsTitles([...Object.keys(todos)]);
    };
    getTodos();
  }, []);
  const value = { listsTitles, setListsTitles , tasks , setTasks};
  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
