import { FlatList } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { renderTaskItem } from "./render-task-item.components";
export const TasksList = ({ tasks }) => {
  return (
    <SwipeListView
      data={tasks}
      renderItem={renderTaskItem}   renderHiddenItem={ (data, rowMap) => (
        <View style={styles.rowBack}>
            <Text>Left</Text>
            <Text>Right</Text>
        </View>
    )}
    leftOpenValue={75}
    rightOpenValue={-75}
/>
      keyExtractor={(item) => item.id}
    />
  );
};
