import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const fitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {fitnessData.map((item, key) => (
        <Pressable
          style={styles.imageWrapper}
          key={key}
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
        >
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <Text style={styles.itemText}>{item.name}</Text>
          <MaterialCommunityIcons
            style={styles.itemIcon}
            name="lightning-bolt"
            size={24}
            color="white"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  itemImage: {
    width: "95%",
    height: 140,
    borderRadius: 7,
  },
  itemText: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    left: 20,
    top: 20,
  },
  itemIcon: {
    position: "absolute",
    bottom: 15,
    left: 20,
  },
});
