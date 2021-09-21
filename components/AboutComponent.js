import React, { Component } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Card, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import FullWidthImage from "react-native-fullwidth-image";

class About extends Component {
  static navigationOptions = {
    title: "About the chef",
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FullWidthImageImage
          style={styles.image}
          source={{ uri: "../assets/profile1.jpg" }}
          ratio={1 / 1}
        />
        <Divider />
        <Text style={styles.baseText}>About Chef Sarah Jin</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    textAlign: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    borderRadius: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default About;
