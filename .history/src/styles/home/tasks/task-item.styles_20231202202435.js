import { StyleSheet } from "react-native";
export const taskItemStyle = StyleSheet.create({
  task: {
    width: "90%",
    height: 60,
    backgroundColor: "white",
    marginVertical: 10,
    justifyContent:'center',
    paddingLeft:20
  },
  taskTitle:{fontSize:16},
  taskContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
