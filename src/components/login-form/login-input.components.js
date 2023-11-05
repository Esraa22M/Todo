import { View, TextInput, Text } from "react-native";
import { textInputStyle } from "../../styles/login/text-input.styles";
import { formStyle } from "../../styles/login/login-form.styles";
import { UserContext } from "../../context/user.context";

export const TextInputWithLabel = ({ labelValue, ...otherprops }) => {
  const textInputStyleArray = [formStyle.textInput];
  return (
    <View style={textInputStyle.textInputWrapper}>
      <Text style={textInputStyle.labelValue}>{labelValue}</Text>
      <TextInput {...otherprops} style={textInputStyleArray} />
    </View>
  );
};
