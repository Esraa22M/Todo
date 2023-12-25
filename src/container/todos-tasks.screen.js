import { View, Text } from "react-native";
import { useContext } from "react";
import { ListsContext } from "../context/lists.context";
import { TasksList } from "../components/home/todos-tasks/tasks-list.components";
export const TodosTasks = ({route}) => {  let { todos } = useContext(ListsContext);
const title =route.params.name
const tasks =todos[title]
  return (
    <View>
      <TasksList tasks={tasks}/>
    </View>
  );
};
