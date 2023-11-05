import { Text, SafeAreaView } from "react-native";
export const Header = ({ textValue, headerStyle }) => {
  return (
    <SafeAreaView style={headerStyle.headerContainer}>
      <Text style={headerStyle.headerContent}>{textValue}</Text>
    </SafeAreaView>
  );
};
