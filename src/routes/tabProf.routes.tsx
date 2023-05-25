import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeProfessorScreen from "../screens/HomeProfessorScreen";
import SalasProfScreen from "../screens/SalasProfScreen";
import { Image, View, Text } from "react-native";
import Sair from "../screens/Sair/Index";

const Tab = createMaterialTopTabNavigator();

function tabProf() {
  return (
    <Tab.Navigator initialRouteName="HomeProfessorScreen">
      <Tab.Screen
        name="SalasProfScreen"
        component={SalasProfScreen}
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
        name="HomeProfessorScreen"
        component={HomeProfessorScreen}
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

export default tabProf;
