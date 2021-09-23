import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { STORIES } from "../shared/stories";

function RenderStory({ story }) {
  if (story) {
    return (
      <ScrollView>
        <Card featuredTitle={story.title} image={story.image}>
          <Text style={({ marginBottom: 10 }, { marginLeft: 10 })}>
            Posted at {story.date}
          </Text>
          <Divider style={{ margin: 10 }} />
          <Text style={({ marginTop: 10 }, { marginLeft: 10 })}>
            Description
          </Text>
          <Text style={{ margin: 10 }}>{story.description}</Text>
        </Card>
      </ScrollView>
    );
  }
  return <View />;
}

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
    const storyId = this.props.navigation.getParam("storyId");
    const story = this.state.stories.filter((story) => story.id === storyId)[0];
    return <RenderStory story={story} />;
  }
}

export default Stories;
