import { FlatList } from "react-native";
import { renderListItem } from "./render-list-item";
export const TasksList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={renderListItem}
      keyExtractor={(item) => item.id}
    />
  );
};
