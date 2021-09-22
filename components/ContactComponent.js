import React, { Component } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { Card, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };
  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>Mariannengasse 9</Text>
          <Text>Wien 1090</Text>
          <Text>Austria</Text>
          <Text style={{ marginTop: 10 }}>Phone: +42 224 415 8948</Text>
          <Text>Email: email@email.com</Text>
          <Button
            title="Send Email"
            buttonStyle={{ backgroundColor: "#5637DD", margin: 40 }}
            icon={
              <Icon
                name="envelope-o"
                type="font-awesome"
                color="#fff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            onPress={() => this.sendMail()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
