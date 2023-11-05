import { View } from "react-native";
import { homeStyle } from "../styles/home/homeOverAllStyle.styles";
import { UserInfo } from "../components/home/user-info.components";
import { Tasks } from "../components/home/user-tasks/tasks.components";
export const Home = () => {
  return (
    <View style={homeStyle.wrapper}>
      <UserInfo />
      <Tasks />
    </View>
  );
};
