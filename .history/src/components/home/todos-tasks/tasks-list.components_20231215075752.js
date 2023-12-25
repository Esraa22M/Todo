import { View , Text } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { renderTaskItem } from "./render-task-item.components";
export const TasksList = ({ tasks }) => {
  return (
    <SwipeListView
      data={tasks}
      renderItem={renderTaskItem}
      
      keyExtractor={(item) => item.id} 
    leftOpenValue={75}
    rightOpenValue={-75}
    />
  );
};
