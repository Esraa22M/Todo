import { StyleSheet } from "react-native";
export const taskItemStyle = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 18,
  },
  text: {
    color: "white",
    marginHorizontal: 10,
    textTransform:"capitalize"
  },
});
