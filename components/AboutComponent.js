import React, { Component } from "react";
import { Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Card, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class About extends Component {
  static navigationOptions = {
    title: "About the chef",
  };
  render() {
    return (
      <ScrollView>
        <ImageBackground
          style={styles.backImage}
          source={require("../assets/profileCardPhoto.jpg")}
        />
        <Divider style={styles.divider} />

        <Card style={{ borderRadius: 50 }}>
          <Text style={styles.titleText}> {"  "}Cosy Taste</Text>
          <Text style={styles.baseText}> {"   "}Have a meet chef Jin!</Text>

          <Text>
            {"    "}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    color: "#8F4F4F",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#8F4F4F",
    color: "white",
  },
  image: {
    height: 200,
    aspectRatio: 0.9,
    alignContent: "center",
  },
  backImage: {
    height: 200,
    aspectRatio: 1.9,
    alignContent: "center",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
    borderRadius: 15,
  },
  imageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",

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

  divider: {
    borderWidth: 0.5,
    width: "80%",
    marginTop: 15,
    marginRight: "auto",
    marginLeft: "auto",
    borderColor: "#CDBBA7",
  },
});

export default About;
