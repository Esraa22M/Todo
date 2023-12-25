import { View } from "react-native";
import { TodosHeader } from "./todos.header.component";
import { TodosList } from "./todos-list.components";
export const Tasks = ({ navigation }) => {
  return (
    <View>
      <TodosHeader />
      <TodosList navigation={navigation} />
    </View>
  );
};
