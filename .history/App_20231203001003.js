import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProivder } from "./src/context/user.context";
import { Login } from "./src/container/login.screen";
import { Home } from "./src/container/home.screen";
import { ListsProvider } from "./src/context/lists.context";
import { ManageTasks } from "./src/container/manage-tasks.screen";
const Stack = createNativeStackNavigator();
import { quickstart } from "./src/Api/firebaseConfig";
import { GlobalStyles } from "./src/constants/Global.constants";
export default function App() {
  quickstart();
  return (
    <UserProivder>
      <ListsProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleStyle: {     textTransform:"capitalize"
            },

              headerStyle: { backgroundColor: GlobalStyles.colors.black100 },headerTintColor:'white'
            }}
          >
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
            <Stack.Screen
              name="manage"
              component={ManageTasks}
              options={({ route }) => ({ title: route.params.name })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ListsProvider>
    </UserProivder>
  );
}
