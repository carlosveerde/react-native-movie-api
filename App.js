import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import api from "./src/services/api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  componentDidMount() {
    const response = api.get("/filmes");
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Olá Mundo!</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
