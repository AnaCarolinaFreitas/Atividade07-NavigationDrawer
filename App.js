import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./pages/Home";
import Information from "./pages/Information";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{drawerLabel: 'Home', title: 'home'}} />

      <Drawer.Screen name="Information" component={Information} options={{ drawerLabel: 'Information', title: 'information'}} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}