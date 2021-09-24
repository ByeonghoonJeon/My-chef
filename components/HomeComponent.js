import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { RECIPES } from "../shared/recipes";
import { PROMOTIONS } from "../shared/promotions";
import { STORIES } from "../shared/stories";
import * as Animatable from "react-native-animatable";

function RenderItem({ item }) {
  if (item) {
    return (
      <Card featuredTitle={item.title} image={item.image}>
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: RECIPES,
      promotions: PROMOTIONS,
      stories: STORIES,
    };
  }

  static navigationOptions = {
    title: "My Chef",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <RenderItem
            item={this.state.recipes[this.state.recipes.length - 1]}
            onPress={() => this.props.navigation.navigate("Contact")}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <RenderItem
            item={this.state.promotions[this.state.promotions.length - 1]}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInRightBig" duration={3000}>
          <RenderItem item={this.state.stories[0]} />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Home;
