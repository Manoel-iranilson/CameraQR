import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeAlunoScreen from "../screens/HomeAlunoScreen";
import SalasAlunoScreen from "../screens/SalasAlunoScreen";
import { Image, View, Text } from "react-native";
const Tab = createMaterialTopTabNavigator();

function tabAluno() {
  return (
    <Tab.Navigator initialRouteName="HomeAlunoScreen">
      <Tab.Screen
        name="SalasAlunoScreen"
        component={SalasAlunoScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Image source={require("../assets/salaAtiva.png")} />
                ) : (
                  <Image source={require("../assets/SALA.png")} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="HomeAlunoScreen"
        component={HomeAlunoScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Image source={require("../assets/userAtiva.png")} />
                ) : (
                  <Image source={require("../assets/user.png")} />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default tabAluno;
