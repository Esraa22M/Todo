import { View } from "react-native";
import { TasksHeader } from "./tasks.header.component";
import { TasksList } from "./tasks-list.components";
export const Tasks = ({ navigation }) => {
  return (
    <View>
      <TasksHeader />
      <TasksList navigation={navigation} />
    </View>
  );
};
