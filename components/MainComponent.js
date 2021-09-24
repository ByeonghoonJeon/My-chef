import React, { Component } from "react";
import Home from "./HomeComponent";
import SpecialRecipes from "./DirectoryComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Constants from "expo-constants";
import Recipes from "./RecipesComponent";
import Pricing from "./PriceComponent";
import Stories from "./StoriesComponent";

import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const HomeNavigator = createStackNavigator(
  {
    MyChef: { screen: Home },
    SpecialRecipes: { screen: SpecialRecipes },
    Stories: { screen: Stories },
    About: { screen: About },
    Recipes: { screen: Recipes },
    Contact: { screen: Contact },
    Pricing: { screen: Pricing },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#362222",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AboutNavigator = createStackNavigator({
  About: { screen: About },
});

const SpecialRecipesNavigator = createStackNavigator({
  SpecialRecipes: { screen: SpecialRecipes },
});

const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact },
});

const RecipesNavigator = createStackNavigator({
  Recipes: { screen: Recipes },
});

const PricingNavigator = createStackNavigator({
  Pricing: { screen: Pricing },
});

const StoriesNavigator = createStackNavigator({
  Stories: { screen: Stories },
});

const MainNavigator = createDrawerNavigator(
  {
    MyChef: { screen: HomeNavigator },
    SpecialRecipes: { screen: SpecialRecipesNavigator },
    Stories: { screen: StoriesNavigator },
    About: { screen: AboutNavigator },
    Contact: { screen: ContactNavigator },
    Pricing: { screen: PricingNavigator },
  },
  {
    drawerBackgroundColor: "#F8F0DF",
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default Main;
