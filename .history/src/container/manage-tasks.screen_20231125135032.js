import { View, Text } from "react-native";
import { useContext } from "react";
import { ListsContext } from "../context/lists.context";
export const ManageTasks = ({route}) => {  let { todos } = useContext(ListsContext);
console.log(route.params.name)
  return (
    <View>
      <Text>tasks</Text>
    </View>
  );
};
