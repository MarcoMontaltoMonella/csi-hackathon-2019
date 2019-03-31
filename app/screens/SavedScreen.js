import React from "react";
import { StyleSheet, Text, View, SectionList, Alert } from "react-native";
import Colors from "../constants/Colors";

export default class SavedScreen extends React.Component {
  static navigationOptions = {
    title: "Saved"
  };

  GetSectionListItem = item => {
    Alert.alert(item);
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: "Small size debris",
              data: ["L464", "L1234", "L427"]
            },
            {
              title: "Medium size debris",
              data: ["L432", "L266", "L157"]
            },
            {
              title: "Medium size debris",
              data: ["L414", "L7834", "L417"]
            }
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={styles.SectionHeader}> {section.title} </Text>
          )}
          renderItem={({ item }) => (
            <Text
              style={styles.SectionListItemS}
              onPress={this.GetSectionListItem.bind(this, item)}
            >
              {" "}
              {item}{" "}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.lightBackground
  },
  SectionHeader: {
    backgroundColor: Colors.tabHeader,
    fontSize: 20,
    padding: 5,
    color: "#fff",
    fontWeight: "bold"
  },
  SectionListItemS: {
    fontSize: 16,
    padding: 6,
    color: "#000",
    backgroundColor: "#F5F5F5",
    borderColor: "black",
    borderWidth: 1.5
  }
});
