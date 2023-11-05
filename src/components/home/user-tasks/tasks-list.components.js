import { FlatList, Text, Pressable, View } from "react-native";
import { ListsContext } from "../../../context/lists.context";
import { useContext } from "react";
import { renderListItem } from "./render-list-item";
export const TasksList = ({}) => {
  let { lists } = useContext(ListsContext);

  return (
    <FlatList
      data={lists}
      renderItem={renderListItem}
      keyExtractor={(item) => item.title}
    />
  );
};
