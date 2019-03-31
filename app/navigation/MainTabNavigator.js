import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import TabBarLabel from "../components/TabBarLabel";
import MapScreen from "../screens/MapScreen";
import SavedScreen from "../screens/SavedScreen";
import SettingsScreen from "../screens/SettingsScreen";
import InboxScreen from "../screens/InboxScreen";
import LaunchScreen from "../screens/LaunchScreen";

const MapStack = createStackNavigator({
  Map: MapScreen
});

MapStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel title={"EXPLORE"} focused={focused} />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-search${focused ? "" : "-outline"}`
          : "md-search"
      }
    />
  )
};

const SavedStack = createStackNavigator({
  Saved: SavedScreen
});

SavedStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel title={"SAVED"} focused={focused} />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-heart${focused ? "" : "-outline"}`
          : "md-heart"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel title={"SETTINGS"} focused={focused} />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-settings${focused ? "" : "-outline"}`
          : "md-settings"
      }
    />
  )
};

const InboxStack = createStackNavigator({
  Inbox: InboxScreen
});

InboxStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel title={"INBOX"} focused={focused} />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-chatboxes${focused ? "" : "-outline"}`
          : "md-chatboxes"
      }
    />
  )
};

const LaunchStack = createStackNavigator({
  Launch: LaunchScreen
});

LaunchStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel title={"LAUNCH"} focused={focused} />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-plane${focused ? "" : "-outline"}`
          : "md-plane"
      }
    />
  )
};

export default createBottomTabNavigator(
  {
    InboxStack,
    MapStack,
    SavedStack,
    LaunchStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);
