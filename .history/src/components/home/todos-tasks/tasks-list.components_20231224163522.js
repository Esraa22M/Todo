import { View, Text } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { renderTaskItem } from "./render-task-item.components";
import { FlatList } from "react-native-gesture-handler";
export const TasksList = ({ tasks }) => {
  
  return (
    <FlatList
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};
