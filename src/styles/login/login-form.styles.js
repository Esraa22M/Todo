import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Global.constants";
export const formStyle = StyleSheet.create({
  formContainer: {
    justifyContent: "start",
    width: "100%",
    margin: 30,
    height: "80%",
    padding: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 15,
  },
  textInput: { marginVertical: 10, padding: 10 },
  textInputFocus: { borderWidth: 1, borderColor: "green" },
  button: {
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.accent,
    padding: 15,
    color: "white",
  },
  buttonLabel: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    textTransform: "capitalize",
  },
});
