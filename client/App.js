import React from "react";
import SignUp from "./screens/SignUp";
import { StyleSheet } from "react-native";
import SignIn from "./screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          style={styles.customFontText}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  customFontText: {
    fontSize: 20,
  },
});
