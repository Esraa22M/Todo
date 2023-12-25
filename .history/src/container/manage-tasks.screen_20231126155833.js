import { View, Text } from "react-native";
import { useContext } from "react";
import { ListsContext } from "../context/lists.context";
import { TasksList } from "../components/home/manage-tasks/tasks-list.components";
export const ManageTasks = ({route}) => {  let { todos } = useContext(ListsContext);
const title =route.params.name
const tasks =todos[title]
  return (
    <View>
      <TasksList tasks={tasks}/>
    </View>
  );
};
