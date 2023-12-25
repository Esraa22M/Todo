import { StyleSheet } from "react-native";
export const taskItemStyle = StyleSheet.create({
  task: {
    width: "90%",
    height: 60,
    backgroundColor: "red",
    marginVertical: 10,
    justifyContent:'center',
    paddingLeft:20
  },
  taskContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
