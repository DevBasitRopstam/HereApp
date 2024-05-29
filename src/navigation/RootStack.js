import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Routes from "./Routes";
import { AuthStack, DashboardStack } from "./Stacks";
import { Splash } from "../screens";

const Stack = createNativeStackNavigator();
const RootStack = () => {

 

  return (
    <Stack.Navigator
     screenOptions={{
      headerShown: false,
      
     }}
    
    >
      <Stack.Screen name={Routes.SPLASH} component={Splash} />
      <Stack.Screen name={Routes.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={Routes.DASHBOARD_STACK} component={DashboardStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
