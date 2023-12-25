import { FlatList, Text, Pressable, View } from "react-native";
import { ListsContext } from "../../../context/lists.context";
import { useContext } from "react";
import { renderListItem } from "./render-list-item";
export const TodosList = ({ navigation }) => {
  let { listsTitles } = useContext(ListsContext);
  return (
    <FlatList
      data={listsTitles}
      renderItem={renderListItem.bind(this, navigation)}
      keyExtractor={(item) => item}
    />
  );
};
