import { View, Text } from "react-native";
import { useContext } from "react";
import { ListsContext } from "../context/lists.context";
export const ManageTasks = () => {
  const [] = useContext(ListsContext)
  return (
    <View>
      <Text>tasks</Text>
    </View>
  );
};
