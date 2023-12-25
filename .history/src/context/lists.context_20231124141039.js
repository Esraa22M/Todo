import { createContext, useLayoutEffect, useState } from "react";
import { getTodosAndDocuments } from "../Api/firebase.utils";
export const ListsContext = createContext({
  lists: [],
  tasks:[]
});

export const ListsProvider = ({ children }) => {
  const [todos, setTodos] = useState({});
  const [listsTitles, setListsTitles] = useState([]);
    useLayoutEffect(() => {
    const getTodos = async () => {
      const todos = await getTodosAndDocuments();
      setTodos({...todos})
      setListsTitles([...Object.keys(todos)]);
    };
    getTodos();
  }, []);
  const value = { listsTitles, setListsTitles , todos , setTodos};
  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
