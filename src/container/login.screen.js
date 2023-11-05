import { KeyboardAvoidingView } from "react-native";
import { loginStyle } from "../styles/login/login.styles";
import { LoginForm } from "../components/login-form/login-form.component";
export const Login = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("todos");
  };

  return (
    <KeyboardAvoidingView
      style={loginStyle.loginWrapper}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
    >
      <LoginForm pressHandler={pressHandler} />
    </KeyboardAvoidingView>
  );
};
