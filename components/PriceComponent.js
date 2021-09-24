import React, { Component } from "react";
import { ScrollView } from "react-native";
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
            color="#4f9deb"
            title="STANDARD"
            price="$400"
            info={["4 Guests", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <PricingCard
            color="#4f9deb"
            title="DELUXE"
            price="$700"
            info={["6 Guests", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInRightBig" duration={3000}>
          <PricingCard
            color="#4f9deb"
            title="PREMIUM"
            price="$1,300"
            info={["6 Guests", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Pricing;
