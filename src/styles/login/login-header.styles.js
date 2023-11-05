import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Global.constants";
export const headerStyle = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  headerContent: {
    textTransform: "capitalize",
    fontSize: 40,
    letterSpacing: 2,
    color: GlobalStyles.colors.black100,
  },
});
