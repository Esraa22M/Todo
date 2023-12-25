import { FlatList } from "react-native";
import { renderTaskItem } from "./render-task-item.components";
export const TasksList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={renderTasksItem}
      keyExtractor={(item) => item.id}
    />
  );
};
