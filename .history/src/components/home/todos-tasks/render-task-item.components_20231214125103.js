import Ionicons from "@expo/vector-icons/Ionicons";
import { Animated, Text, Pressable } from "react-native";
import { taskItemStyle } from "../../../styles/home/tasks/task-item.styles";
export const renderTaskItem = (itemData) => {
      return (
    <Pressable style={taskItemStyle.taskContainer}>
        <Animated.View style={taskItemStyle.task}>
          <Text style={taskItemStyle.taskTitle}>{itemData.item.name}</Text>
        </Animated.View>
    </Pressable>
  );
};
