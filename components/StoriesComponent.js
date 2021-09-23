import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { STORIES } from "../shared/stories";
import { FlatList } from "react-native";

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
            <Text style={({ marginTop: 10 }, { marginLeft: 10 })}>
              Description
            </Text>
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

// export default Directory;

// class Stories extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stories: STORIES,
//     };
//   }

//   static navigationOptions = {
//     title: "Our Stories",
//   };

//   render() {
//     return (
//       <ScrollView>
//         <Card
//           featuredTitle={this.state.stories[0].title}
//           image={this.state.stories[0].image}
//         >
//           <Text style={({ marginBottom: 10 }, { marginLeft: 10 })}>
//             Posted at {this.state.stories[0].date}
//           </Text>
//           <Divider style={{ margin: 10 }} />
//           <Text style={({ marginTop: 10 }, { marginLeft: 10 })}>
//             Description
//           </Text>
//           <Text style={{ margin: 10 }}>
//             {this.state.stories[0].description}
//           </Text>
//         </Card>
//       </ScrollView>
//     );
//   }
// }

export default Stories;
