import { addCollectionsAndDocuments } from "../Api/firebase.utils";
import { createContext, useLayoutEffect, useState } from "react";
import { TODOS_LIST } from "../Api/db";
import { getTodosAndDocuments } from "../Api/firebase.utils";
export const ListsContext = createContext({
  lists: {},
});

export const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState({});  const [tasks, setTasks] = useState({});
    useLayoutEffect(() => {
    const getTodos = async () => {
      const todos = await getTodosAndDocuments();
      console.log(Object.values(todos));
    };
    getTodos();
  }, []);
  const value = { lists, setLists };
  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
