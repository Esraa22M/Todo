import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { taskItemStyle } from "../../../styles/home/tasks/task-item.styles";
export const renderTaskItem = (itemData) => {
  return (
    <View>
      <View style={taskItemStyle.task}><Text>{itemData.title}</Text></View>
    </View>
  );
};
