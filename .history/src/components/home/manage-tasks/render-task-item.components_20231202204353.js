import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { taskItemStyle } from "../../../styles/home/tasks/task-item.styles";
export const renderTaskItem = (itemData) => {
  return (
    <View style={taskItemStyle.taskContainer}>
      <PanGestureHandler>
        <View style={taskItemStyle.task}>
          <Text style={taskItemStyle.taskTitle}>{itemData.item.name}</Text>
        </View>
      </PanGestureHandler>
    </View>
  );
};
