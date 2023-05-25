import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginScreen";
import HomeAlunoScreen from "../screens/HomeAlunoScreen";
import SalasAlunoScreen from "../screens/SalasAlunoScreen";
import tabAluno from "../routes/tabAluno.routes";
import tabProf from "../routes/tabProf.routes";
import FaltasScreen from "../screens/FaltasScreen";

export type RootStackParamsList = {
  LoginScreen: undefined;
  HomeAlunoScreen: undefined;
  SalasAlunoScreen: undefined;
};

const routes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabAluno"
        component={tabAluno}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabProf"
        component={tabProf}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FaltasScreen"
        component={FaltasScreen}
        options={{
          headerTitle: "Faltas",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#0293FF" },
        }}
      />
    </Stack.Navigator>
  );
};

export default routes;
