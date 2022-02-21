import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { ILaptop, useFetchLaptop } from "../hooks/useFetchLaptop";

const ListItem = ({ laptop }: { laptop: ILaptop }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>ID: {laptop.id}</Text>
      <Text style={styles.itemText}>{laptop["Model Name"]}</Text>
      <Text style={styles.itemText}>Screen: {laptop["Screen"]}</Text>
    </View>
  );
};

export const List = () => {
  const { data, loading, error, nextPage } = useFetchLaptop();

  if (error) {
    return <Text>An error ocurred, please try again.</Text>;
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem laptop={item} />}
        keyExtractor={(item) => item.id?.toString()}
        onEndReachedThreshold={0.1}
        onEndReached={nextPage}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#1C5D99",
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  itemText: {
    color: "#bbcde5",
    fontWeight: "bold",
  },
});
