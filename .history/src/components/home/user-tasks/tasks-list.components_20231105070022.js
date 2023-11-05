import { FlatList, Text, Pressable, View } from "react-native";
import { ListsContext } from "../../../context/lists.context";
import { useContext } from "react";
import { renderListItem } from "./render-list-item";
export const TasksList = ({ navigation }) => {
  let { lists } = useContext(ListsContext);

  return (
    <FlatList
      data={lists}
      renderItem={renderListItem.bind(this, navigation)}
      keyExtractor={(item) => item.title}
    />
  );
};
