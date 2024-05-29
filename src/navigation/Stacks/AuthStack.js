//================================ React Native Imported Files ======================================//
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

/// ====================================== Local Imported Files ======================================//
import {Login } from "../../screens";
import Routes from "../Routes";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
 
  return (
    <Stack.Navigator >
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      </Stack.Navigator>
  );
};

export default AuthStack;
