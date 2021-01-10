import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import colors from "../constants/colors";
import Profiles from "../screens/Profiles";
import Profile from "../screens/Profile";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Profiles"
      component={Profiles}
      options={{ headerShown: true }}
    />
    <MainStack.Screen name="Options" component={Options} />
    {/* <MainStack.Screen name="Profiles" component={Profiles} /> */}
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        )
      })}
    />

    <MainStack.Screen name="Profiles" component={Profiles} />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
