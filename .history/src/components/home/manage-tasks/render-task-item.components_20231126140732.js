import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, Pressable, View } from "react-native";
export const renderTaskItem = ( itemData) => {
  return (
    <Pressable >
      <View >
        <Ionicons name="book-outline" size={22} color="white" />
        <Text style={listItemStyle.text}>{itemData.item}</Text>
      </View>
    </Pressable>
  );
};
