import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Filme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.props.data.foto }}
          style={{ height: 400, width: 300 }}
        />
        <Text style={styles.nomeFilme}>{this.props.data.nome}</Text>
        <Text style={styles.descricao}>{this.props.data.descricao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nomeFilme: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    color: "white",
    fontSize: 16,
  },
});
