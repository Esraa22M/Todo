import { View, Text } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { renderTaskItem } from "./render-task-item.components";
export const TasksList = ({ tasks }) => {
  const renderHiddenItem = (data, rowMap) => {
    closeRow = (rowMap , rowKey) => {};
    deleteRow=(rowMap , rowKey)=>{}
    return (
      <HiddenItemsWithActions
        data={data}
        rowMap={rowMap}
        closeRow={() => closeRow(rowMap, data.id)}
        daleteRow={() => deleteRow(rowMap, data.id)}
      />
    );
  };
  return (
    <SwipeListView
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};
