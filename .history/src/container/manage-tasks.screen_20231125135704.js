import { View, Text } from "react-native";
import { useContext } from "react";
import { ListsContext } from "../context/lists.context";
export const ManageTasks = ({route}) => {  let { todos } = useContext(ListsContext);
const title =route.params.name
console.log(todos[title])
  return (
    <View>
      <Text>tasks</Text>
    </View>
  );
};
