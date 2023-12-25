import { StyleSheet } from "react-native";
export const taskItemStyle = StyleSheet.create({
  task: {
    width: "90%",
    height: 60,
    backgroundColor: "white",
    marginVertical: 10,
    justifyContent:'center',
    paddingLeft:20,
    shadowOpacity:0.08,
    shadowOffset:{width:0 , height:28},
    shadowRadius:10
  },
  taskTitle:{fontSize:16},
  taskContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
