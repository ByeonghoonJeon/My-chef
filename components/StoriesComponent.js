import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Card, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { STORIES } from "../shared/stories";
import { FlatList, List } from "react-native";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: STORIES,
    };
  }

  static navigationOptions = {
    title: "Our Stories",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderStoriesItem = ({ item }) => {
      return (
        <ScrollView>
          <Card featuredTitle={item.title} image={item.image}>
            <Text style={({ marginBottom: 10 }, { marginLeft: 10 })}>
              Posted at {item.date}
            </Text>
            <Divider style={{ margin: 10 }} />
            <Text style={styles.bold}>Description</Text>
            <Text style={{ margin: 10 }}>{item.description}</Text>
          </Card>
        </ScrollView>
      );
    };

    return (
      <FlatList
        data={this.state.stories}
        renderItem={renderStoriesItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    color: "#362222",
    marginTop: 10,
    marginLeft: 10,
  },
});

export default Stories;
