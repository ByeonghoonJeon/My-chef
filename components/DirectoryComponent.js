import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { RECIPES } from "../shared/recipes";
import Recipes from "./RecipesComponent";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: RECIPES,
    };
  }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.menu}
          subtitle={item.introduction}
          onPress={() => navigate("Recipes", { recipeId: item.id })}
          leftAvatar={{ source: require("../assets/logo.png") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.recipes}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
