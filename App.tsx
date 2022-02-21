import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { List } from "./screen/List";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
  },
});
