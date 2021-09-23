import React, { Component } from "react";
import { ScrollView } from "react-native";
import { PricingCard } from "react-native-elements";

class Pricing extends Component {
  static navigationOptions = {
    title: "Price Information",
  };
  render() {
    return (
      <ScrollView>
        <PricingCard
          color="#4f9deb"
          title="STANDARD"
          price="$400"
          info={["4 Guests", "Basic Support", "All Core Features"]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
        />
        <PricingCard
          color="#4f9deb"
          title="DELUXE"
          price="$700"
          info={["6 Guests", "Basic Support", "All Core Features"]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
        />
        <PricingCard
          color="#4f9deb"
          title="PREMIUM"
          price="$1,300"
          info={["6 Guests", "Basic Support", "All Core Features"]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
        />
      </ScrollView>
    );
  }
}

export default Pricing;
