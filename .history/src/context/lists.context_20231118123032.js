import { addCollectionsAndDocuments } from "../Api/firebase.utils";
import { createContext, useLayoutEffect, useState } from "react";
import { TODOS_LIST } from "../Api/db";
export const ListsContext = createContext({
  lists: [],
});

export const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  const value = { lists, setLists };
  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
