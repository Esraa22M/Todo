import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Global.constants";

export const textInputStyle = StyleSheet.create({
  textInputWrapper: {
    flex: 1,
    width: "100%",
    padding: 5,
  },
  labelValue: {
    textTransform: "capitalize",
    fontSize: 16,
    color: GlobalStyles.colors.black100,
  },
});
