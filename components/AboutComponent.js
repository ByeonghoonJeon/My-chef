import React, { Component } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class About extends Component {
  static navigationOptions = {
    title: "About the chef",
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/profile1.jpg")}
        />
        <Text style={styles.imageText}>
          {"   "}
          Create special dinner with{"  "} {"\n"} {"  "}chef Jin
        </Text>
        <Text style={styles.titleText}>About Chef Sarah Jin</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    textAlign: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    borderRadius: 10,
    width: "95%",
    height: 250,
    marginTop: 10,
    alignContent: "center",
    position: "relative",
  },
  imageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#911F27",
    position: "absolute",
    top: 180,
    marginLeft: 30,
    alignSelf: "flex-start",
    backgroundColor: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default About;
