import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Global.constants";
export const userStyle = StyleSheet.create({
  userInfoWrapper: {
    width: "100%",
    marginVertical: 25,
  },
  emailWrapper: {
    flexDirection: "row",
    marginVertical: 12,
    alignItems: "center",
  },
  userLabel: {
    backgroundColor: "white",
    marginRight: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  userLabelText: { textTransform: "uppercase", fontSize: 20 },
  email: { color: "white", fontSize: 16 },
  name: { color: "white", fontSize: 20, textTransform: "capitalize" },
});
