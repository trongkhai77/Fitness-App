import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";
const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image style={styles.imageTitle} source={{ uri: route.params.image }} />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="arrow-back-outline"
          size={28}
          color="white"
        />

        {route.params.excersises.map((item, index) => (
          <Pressable style={styles.excersisesItemWrapper} key={index}>
            <Image style={styles.excersisesItem} source={{ uri: item.image }} />
            <View style={styles.contentItem}>
              <Text style={styles.nameItem}>{item.name}</Text>
              <Text style={styles.setsItem}>x{item.sets}</Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign
                style={{ marginLeft: 60 }}
                name="checkcircle"
                size={24}
                color="green"
              />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        style={styles.startButton}
        onPress={() => {
          navigation.navigate("Fit", {
            excersises: route.params.excersises,
          });
          setCompleted([]);
        }}
      >
        <Text style={styles.textButton}>START</Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  imageTitle: {
    width: "100%",
    height: 170,
  },
  backIcon: {
    position: "absolute",
    top: 10,
    left: 15,
  },
  excersisesItemWrapper: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  excersisesItem: {
    width: 90,
    height: 90,
  },
  contentItem: {
    marginLeft: 10,
  },
  nameItem: {
    fontSize: 17,
    fontWeight: "bold",
    width: 170,
  },
  setsItem: {
    marginTop: 4,
    fontSize: 18,
    color: "gray",
  },
  startButton: {
    backgroundColor: "blue",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    width: 120,
    borderRadius: 6,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
});
