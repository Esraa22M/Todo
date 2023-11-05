import { getLists } from "../Api/getLists";
import { createContext, useLayoutEffect, useState } from "react";
export const ListsContext = createContext({
  lists: [],
});

export const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  useLayoutEffect(() => {
    const getdata = async () => {
      const data = await getLists("todos");
      setLists([...data]);
    };
    getdata();
  }, []);
  const value = { lists, setLists };

  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
