import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { RECIPES } from "../shared/recipes";

class SpecialRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: RECIPES,
    };
  }

  static navigationOptions = {
    title: "Special Recipes",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.menu}
          subtitle={item.introduction}
          onPress={() => navigate("Recipes", { recipeId: item.id })}
          leftAvatar={{ source: item.image }}
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

export default SpecialRecipes;
