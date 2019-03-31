import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function MyTabBarLabel(props) {
  return (
    <Text
      style={[
        styles.tabBarLabel,
        props.focused ? styles.tabBarLabelActive : styles.tabBarLabelInactive
      ]}
    >
      {props.title}
    </Text>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    paddingBottom: 6,
    fontSize: 10,
    textAlign: "center"
  },
  tabBarLabelActive: {
    color: Colors.tabIconSelected
  },
  tabBarLabelInactive: {
    color: Colors.tabIconDefault
  }
});
