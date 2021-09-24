import React, { Component } from "react";
import { ScrollView, Text, Linking } from "react-native";
import { Card, Button } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import * as Animatable from "react-native-animatable";
class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };
  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text>Mariannengasse 9</Text>
            <Text>Wien 1090</Text>
            <Text>Austria</Text>
            <Text style={{ marginTop: 10 }}>Phone: +42 224 415 8948</Text>
            <Text style={{ marginBottom: 20 }}>Email: email@email.com</Text>
            <Button
              icon={
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={25}
                  color={"#8F4F4F"}
                  style={{ marginRight: 20 }}
                />
              }
              title="Send e-mail to book!"
              type="outline"
              titleStyle={{ color: "#8F4F4F" }}
              buttonStyle={{
                borderColor: "#8F4F4F",
                borderWidth: 3,
              }}
              onPress={() => Linking.openURL("mailto:hoon4972@gmail.com")}
              raised
            ></Button>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
