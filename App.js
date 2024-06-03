import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login";
import SignUpScreen from "./singUp";
import HomeScreen from "./HomeScreen"; // Yeni eklediğimiz HomeScreen bileşeni
import MainGaleri from "./MainGaleri";
import Favoriler from './favorite';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Giriş Yap" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Kayıt Ol" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen} //
          options={{ title: "Benim Galerim" }} // İsteğe bağlı, başlık ayarları
        />
        <Stack.Screen
          name="MainGaleri"
          component={MainGaleri}
          options={{ title: "Galerim" }}
        />
                <Stack.Screen
          name="favorite"
          component={Favoriler}
          options={{ title: "Favoriler" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
