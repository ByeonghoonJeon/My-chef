import React, { Component } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Card, CardItem } from "react-native-elements";
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
          source={require("../assets/profile1.png")}
        />
        <Card style={{ borderRadius: 50 }}>
          <Text style={styles.titleText}>About Chef Sarah Jin</Text>
          <Text style={styles.baseText}>Great</Text>
        </Card>
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
    height: 200,
    aspectRatio: 0.9,
    alignContent: "center",
    position: "relative",
  },
  imageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 180,
    marginLeft: 30,
    alignSelf: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default About;
