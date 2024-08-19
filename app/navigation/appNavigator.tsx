import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
// Screens Importing
import ProductDetails from "../screens/HomeTabs/ProductDetail";
import SplashScreen from "../screens/Splash/index";

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default () => <AppNavigator />;

const styles = StyleSheet.create({});
