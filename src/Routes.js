import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import NewContactForm from "../src/components/NewContactForm";
import ContactList from "../src/components/ContactList";

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Adicionar"
          component={NewContactForm}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather focused={focused} name="plus" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Listar"
          component={ContactList}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather focused={focused} name="list" size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
