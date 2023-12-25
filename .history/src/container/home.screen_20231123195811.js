import { View } from "react-native";
import { homeStyle } from "../styles/home/homeOverAllStyle.styles";
import { UserInfo } from "../components/home/user-info.components";
import { Todos } from "../components/home/user-todos/todos.components";
export const Home = ({ navigation }) => {
  return (
    <View style={homeStyle.wrapper}>
      <UserInfo />
      <Todos navigation={navigation} />
    </View>
  );
};
