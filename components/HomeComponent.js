import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { RECIPES } from "../shared/recipes";
import { PROMOTIONS } from "../shared/promotions";
import { STORIES } from "../shared/stories";

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
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <RenderItem
          item={this.state.recipes[this.state.recipes.length - 1]}
          onPress={() => navigate("Recipes", { recipeId: item.id })}
        />
        <RenderItem
          item={this.state.promotions[this.state.promotions.length - 1]}
        />
        <RenderItem item={this.state.stories[0]} />
      </ScrollView>
    );
  }
}

export default Home;
