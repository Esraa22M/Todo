import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Pressable } from "react-native";
import { taskItemStyle } from "../../../styles/home/tasks/task-item.styles";
export const renderTaskItem = (itemData) => {
      return (
    <Pressable style={taskItemStyle.taskContainer}>
        <View style={taskItemStyle.task}>
          <Text style={taskItemStyle.taskTitle}>{itemData.item.name}</Text>
        </View>
    </Pressable>
  );
};
