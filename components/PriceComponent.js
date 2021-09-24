import React, { Component } from "react";
import { ScrollView, Linking } from "react-native";
import { PricingCard } from "react-native-elements";
import * as Animatable from "react-native-animatable";
class Pricing extends Component {
  static navigationOptions = {
    title: "Price Information",
  };
  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <PricingCard
            color="#9E7777"
            title="STANDARD"
            price="$440"
            info={["4 Guests", "2 Main dishes", "3 Side Dishes"]}
            button={{ title: " Check the availability", icon: "check" }}
            onButtonPress={() => Linking.openURL("mailto:hoon4972@gmail.com")}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <PricingCard
            color="#79B4B7"
            title="DELUXE"
            price="$770"
            info={["6 Guests", "3 Main dishes", "5 Side Dishes"]}
            button={{ title: " Check the availability", icon: "check" }}
            onButtonPress={() => Linking.openURL("mailto:hoon4972@gmail.com")}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInRightBig" duration={3000}>
          <PricingCard
            color="#B97A95"
            title="PREMIUM"
            price="$1,320"
            info={["8 Guests", "3 Main dishes", "5 Side Dishes"]}
            button={{ title: " Check the availability", icon: "check" }}
            onButtonPress={() => Linking.openURL("mailto:hoon4972@gmail.com")}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Pricing;
