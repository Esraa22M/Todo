import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, Pressable, View } from "react-native";
import { listItemStyle } from "../../../styles/home/tasks/list-item.styles";
export const renderListItem = (itemData) => {
  return (
    <Pressable>
      <View style={listItemStyle.wrapper}>
        <Ionicons name="book-outline" size={22} color="white" />
        <Text style={listItemStyle.text}>{itemData.item.title}</Text>
      </View>
    </Pressable>
  );
};
