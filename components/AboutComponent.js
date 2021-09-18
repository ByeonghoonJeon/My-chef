import React, { Component } from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };
  render() {
    return (
      <ScrollView>
        <Text>About Page</Text>
      </ScrollView>
    );
  }
}

export default About;
