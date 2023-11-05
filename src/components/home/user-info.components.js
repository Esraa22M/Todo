import { View, Text } from "react-native";
import { UserContext } from "../../context/user.context";
import { userStyle } from "../../styles/home/user.styles";
import { useContext } from "react";
export const UserInfo = () => {
  const { inputValues } = useContext(UserContext);
  let { name, email } = inputValues;
  return (
    <View style={userStyle.userInfoWrapper}>
      <View style={userStyle.emailWrapper}>
        <View style={userStyle.userLabel}>
          <Text style={userStyle.userLabelText}>{name.charAt(0)}</Text>
        </View>
        <View>
          <Text style={userStyle.email}>{email}</Text>
          <Text style={userStyle.name}>{name}</Text>
        </View>
      </View>
    </View>
  );
};
