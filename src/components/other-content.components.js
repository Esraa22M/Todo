import { View, Text } from "react-native";
import { otherContentStyle } from "../styles/login/other-content.stye";
export const OtherContent = () => {
  return (
    <View style={otherContentStyle.otherContentWraper}>
      <Text style={otherContentStyle.otherContentText}>other content</Text>
    </View>
  );
};
