import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";
import { tasksHeader } from "../../../styles/home/todos/tasks-header.styles";
export const TodosHeader = () => {
  return (
    <View style={tasksHeader.wrapper}>
      <Ionicons name="home" size={22} color="white" />
      <Text style={tasksHeader.text}>Tasks</Text>
    </View>
  );
};
