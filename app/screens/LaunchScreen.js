import React from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";

export default class LaunchScreen extends React.Component {
  static navigationOptions = {
    title: "Launch"
  };
  

  render() {
    const inputAccessoryViewID = "uniqueID";
    return (
      
      <ScrollView style={styles.container} keyboardDismissMode="interactive">
        <Button title="Compute" onPress={e => {}}/>
        <Text>Results in here...</Text>
      </ScrollView>
      
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
