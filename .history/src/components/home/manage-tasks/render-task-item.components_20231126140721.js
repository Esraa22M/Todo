import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, Pressable, View } from "react-native";
export const renderTaskItem = ( itemData) => {
  return (
    <Pressable >
      <View style={listItemStyle.wrapper}>
        <Ionicons name="book-outline" size={22} color="white" />
        <Text style={listItemStyle.text}>{itemData.item}</Text>
      </View>
    </Pressable>
  );
};
