import Ionicons from "@expo/vector-icons/Ionicons";
import { Animated, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { taskItemStyle } from "../../../styles/home/tasks/task-item.styles";
export const renderTaskItem = (itemData) => {
  return (
    <View style={taskItemStyle.taskContainer}>
        <Animated.View style={taskItemStyle.task}>
          <Text style={taskItemStyle.taskTitle}>{itemData.item.name}</Text>
        </Animated.View>
    </View>
  );
};
