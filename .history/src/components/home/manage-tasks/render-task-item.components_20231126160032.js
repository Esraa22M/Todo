import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, Pressable, View } from "react-native";
export const renderTaskItem = ( itemData) => {
  return (
    <Pressable >
      <View >
        <Text >{itemData.item.name}</Text>
      </View>
    </Pressable>
  );
};
