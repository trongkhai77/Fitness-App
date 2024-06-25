import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>HOME WORKOUT</Text>

        <View style={styles.inforWrapper}>
          <View>
            <Text style={styles.timesInfor}>{workout}</Text>
            <Text style={styles.contentInfor}>WORKOUTS</Text>
          </View>

          <View>
            <Text style={styles.timesInfor}>{calories}</Text>
            <Text style={styles.contentInfor}>KCAL</Text>
          </View>

          <View>
            <Text style={styles.timesInfor}>{minutes}</Text>
            <Text style={styles.contentInfor}>MINS</Text>
          </View>
        </View>

        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../assets/fitness.jpg")}
          />
        </View>
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
  },
  headerWrapper: {
    backgroundColor: "#CD853D",
    padding: 10,
    height: 200,
    width: "100%",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  inforWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  timesInfor: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  contentInfor: {
    color: "#D0D0D0",
    fontSize: 16,
    marginTop: 6,
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 120,
    marginTop: 20,
    borderRadius: 7,
  },
});
