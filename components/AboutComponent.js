import React, { Component } from "react";
import { Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Card, Divider, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStarOfDavid,
  faStarAndCrescent,
  faOm,
} from "@fortawesome/free-solid-svg-icons";
import { color } from "react-native-reanimated";

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
        >
          <Text style={styles.titleText}> {"  "}Cosy Taste</Text>
        </ImageBackground>

        {/* <Divider style={styles.divider} /> */}

        <Card>
          <Text style={styles.baseText}> {"   "}Have a meet chef Jin!</Text>
          <Image
            style={styles.image}
            source={require("../assets/profile1.png")}
          />
          <Divider style={styles.dividerBottomMargin} />
          <Text style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Divider style={styles.dividerBottomMargin} />
          <Text style={{ textAlign: "center" }}>
            <FontAwesomeIcon
              icon={faStarAndCrescent}
              size={20}
              color={"#8F4F4F"}
            />
            {"   "}
            <FontAwesomeIcon icon={faStarOfDavid} size={20} color={"#8F4F4F"} />
            {"   "}
            <FontAwesomeIcon icon={faOm} size={20} color={"#8F4F4F"} />
          </Text>
          <Text style={{ textAlign: "center", color: "#8F4F4F" }}>
            Religious menu available!
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  iconText: {
    textAlign: "center",
    fontSize: 15,
  },
  baseText: {
    color: "#8F4F4F",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#8F4F4F",
    color: "white",
    width: 180,
    marginTop: "auto",
    borderRadius: 15,
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

  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: "#8F4F4F",
    marginRight: "auto",
    marginLeft: "auto",
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
  dividerBottomMargin: {
    borderWidth: 0.5,
    width: "80%",
    marginTop: 15,
    marginRight: "auto",
    marginLeft: "auto",
    borderColor: "#CDBBA7",
    marginBottom: 15,
  },
});

export default About;
