import { View, Text } from "react-native";
import { useContext } from "react";
import { ListsContext } from "../context/lists.context";
export const ManageTasks = () => {  let { tasks } = useContext(ListsContext);
console.log(lists)
  return (
    <View>
      <Text>tasks</Text>
    </View>
  );
};
