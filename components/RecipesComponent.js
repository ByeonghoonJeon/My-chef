import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { RECIPES } from "../shared/recipes";
import * as Animatable from "react-native-animatable";

function RenderRecipe({ recipe }) {
  if (recipe) {
    return (
      <ScrollView>
        <Card featuredTitle={recipe.menu} image={recipe.image}>
          <Text style={({ marginTop: 10 }, { marginLeft: 10 })}>
            Difficulty: {recipe.difficulty}
          </Text>
          <Text style={({ marginBottom: 10 }, { marginLeft: 10 })}>
            Time: {recipe.time} mins.
          </Text>
          <Text style={({ marginBottom: 10 }, { marginLeft: 10 })}>
            Feature: {recipe.foodType}
          </Text>
          <Divider style={{ margin: 10 }} />
          <Text style={({ marginTop: 10 }, { marginLeft: 10 })}>
            Description
          </Text>
          <Text style={{ margin: 10 }}>{recipe.description}</Text>
        </Card>
      </ScrollView>
    );
  }
  return <View />;
}

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: RECIPES,
    };
  }

  static navigationOptions = {
    title: "Recipe Information",
  };

  render() {
    const recipeId = this.props.navigation.getParam("recipeId");
    const recipe = this.state.recipes.filter(
      (recipe) => recipe.id === recipeId
    )[0];
    return (
      <Animatable.View animation="fadeInRightBig" duration={1000}>
        <RenderRecipe recipe={recipe} />
      </Animatable.View>
    );
  }
}

export default Recipes;
