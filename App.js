import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { FlatList, FlatListComponent, SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import api from "./src/services/api";
import Filme from "./src/services/pages/Filme";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  async componentDidMount() {
    const response = await api.get("/filmes");
    this.setState({
      filmes: response.data,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.filmes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Filme data={item} />}
        />
        <Text style={styles.Text}>WTF</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "black",
  },
  Text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
