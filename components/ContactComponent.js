import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };
  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>Mariannengasse 9y</Text>
          <Text>Wien 1090</Text>
          <Text>Austria</Text>
          <Text style={{ marginTop: 10 }}>Phone: +42 224 415 8948</Text>
          <Text>Email: email@email.com</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
