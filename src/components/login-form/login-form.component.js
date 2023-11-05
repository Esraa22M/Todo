import { TextInputWithLabel } from "./login-input.components";
import { formStyle } from "../../styles/login/login-form.styles";
import { View, KeyboardAvoidingView, ScrollView, Text } from "react-native";
import { Header } from "./login-header.component";
import { headerStyle } from "../../styles/login/login-header.styles";
import { OtherContent } from "../other-content.components";
import { TouchableOpacity } from "react-native";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
export const LoginForm = ({ pressHandler }) => {
  let { inputValues, inputChangeHandler } = useContext(UserContext);
  return (
    <View style={formStyle.formContainer}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "position" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      >
        <ScrollView style={{ flex: 1 }}>
          <Header textValue="Login" headerStyle={headerStyle} />
          <TextInputWithLabel
            labelValue="Name"
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={inputChangeHandler.bind(this, "name")}
            returnKeyType="next"
            placeholder={`Enter Name`}
            value={inputValues.name}
            placeholderTextColor="rgba(225,225,225,0.7)"
          />
          <TextInputWithLabel
            labelValue="email"
            autoFocus={true}
            autoCapitalize="none"
            onChangeText={inputChangeHandler.bind(this, "email")}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Enter  email"
            value={inputValues.email}
            placeholderTextColor="rgba(225,225,225,0.7)"
          />
          <TextInputWithLabel
            labelValue="password"
            value={inputValues.password}
            onChangeText={inputChangeHandler.bind(this, "password")}
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            secureTextEntry={true}
            placeholder="Enter password"
            placeholderTextColor="rgba(225,225,225,0.7)"
          />
          <TouchableOpacity style={formStyle.button} onPress={pressHandler}>
            <Text style={formStyle.buttonLabel}>Sign in</Text>
          </TouchableOpacity>

          <OtherContent />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
