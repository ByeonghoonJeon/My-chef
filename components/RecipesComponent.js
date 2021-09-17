import React from "react";
import { Text, View } from "react-native";
import { Card, Divider } from "react-native-elements";

function RenderRecipe({ recipe }) {
  if (recipe) {
    return (
      <Card featuredTitle={recipe.menu} image={require("../assets/menu1.jpg")}>
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
        <Text style={({ marginTop: 10 }, { marginLeft: 10 })}>Description</Text>
        <Text style={{ margin: 10 }}>{recipe.description}</Text>
      </Card>
    );
  }
  return <View />;
}

function RecipeInfo(props) {
  return <RenderRecipe recipe={props.recipe} />;
}

export default RecipeInfo;
