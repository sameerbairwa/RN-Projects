import React from "react";
import {SafeAreaView, ScrollView, View, Text, StatusBar} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

// bring in all screens
import Home from "./screens/Home";
import Add from "./screens/Add";
import Edit from "./screens/Edit";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: "#0f4c75",
              },
              title: "My netflix app",
              headerTitleStyle: {
                textAlign: "center",
                color: "#00b7c2",
              },
            }}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={{
              headerStyle: {
                backgroundColor: "#0f4c75",
              },
              title: "My netflix app",
              headerTitleStyle: {
                textAlign: "center",
                color: "#00b7c2",
              },
            }}
          />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{
              headerStyle: {
                backgroundColor: "0f4c75",
              },
              title: "My netflix app",
              headerTitleStyle: {
                textAlign: "center",
                color: "#00b7c2",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
