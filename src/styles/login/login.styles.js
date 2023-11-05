import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Global.constants";
export const loginStyle = StyleSheet.create({
  loginWrapper: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.accent,
    padding: 20,
  },
});
