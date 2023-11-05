import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, Pressable, View } from "react-native";
import { listItemStyle } from "../../../styles/home/tasks/list-item.styles";
export const renderListItem = (navigation, itemData) => {
  handlePress = () =>
    navigation.navigate("manage", { name: "Custom profile header" });
  return (
    <Pressable onPress={handlePress}>
      <View style={listItemStyle.wrapper}>
        <Ionicons name="book-outline" size={22} color="white" />
        <Text style={listItemStyle.text}>{itemData.item.title}</Text>
      </View>
    </Pressable>
  );
};
