import { addCollectionsAndDocuments } from "../Api/firebase.utils";
import { createContext, useLayoutEffect, useState } from "react";
import { TODOS_LIST } from "../Api/db";
import { getTodosAndDocuments } from "../Api/firebase.utils";
export const ListsContext = createContext({
  lists: {},
});

export const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState({});
  useLayoutEffect(() => {
    const getTodos = async () => {
      getTodosAndDocuments();
      console.log(todos);
    }getTodos()
    }, []
  )
  const value = { lists, setLists };
  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
