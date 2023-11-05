import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Global.constants";
export const otherContentStyle = StyleSheet.create({
  otherContentText: {
    padding: 20,
    color: GlobalStyles.colors.black100,
    fontSize: 16,
  },
  otherContentWraper: {
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
  },
});
