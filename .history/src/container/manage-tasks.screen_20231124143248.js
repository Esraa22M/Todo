import { View, Text } from "react-native";
import { useContext } from "react";
import { ListsContext } from "../context/lists.context";
export const ManageTasks = ({navigation}) => {  let { todos } = useContext(ListsContext);
console.log(todos)
  return (
    <View>
      <Text>tasks</Text>
    </View>
  );
};
