import { addCollectionsAndDocuments } from "../Api/firebase.utils";
import { createContext, useLayoutEffect, useState } from "react";
import { TODOS_LIST } from "../Api/db";
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
      const todos = await getTodosAndDocuments();
      setLists([...Object.keys(todos)]);
      setTasks([...Object.values(todos)])
    };
    getTodos();
  }, []);
  const value = { lists, setLists , tasks , setTasks};
  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
