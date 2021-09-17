import React, { Component } from "react";
import { View } from "react-native";
import Directory from "./DirectoryComponent";
import RecipeInfo from "./RecipesComponent";
import { RECIPES } from "../shared/recipes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: RECIPES,
      selectedRecipe: null,
    };
  }
  onRecipeSelect(recipeId) {
    this.setState({ selectedRecipe: recipeId });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Directory
          recipes={this.state.recipes}
          onPress={(recipeId) => this.onRecipeSelect(recipeId)}
        />
        <RecipeInfo
          recipe={
            this.state.recipes.filter(
              (recipe) => recipe.id === this.state.selectedRecipe
            )[0]
          }
        />
      </View>
    );
  }
}

export default Main;
