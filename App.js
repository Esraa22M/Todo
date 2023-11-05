import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProivder } from "./src/context/user.context";
import { Login } from "./src/container/login.screen";
import { Home } from "./src/container/home.screen";
import { ListsProvider } from "./src/context/lists.context";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <UserProivder>
      <ListsProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="todos"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ListsProvider>
    </UserProivder>
  );
}
