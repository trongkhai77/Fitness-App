import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  Pressable,
} from "react-native";
import { FitnessItems } from "../Context";
import fitness from "../data/fitness";

const FitScreen = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  const navigation = useNavigation();
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(FitnessItems);
  console.log(completed, "completed exercises");
  return (
    <SafeAreaView>
      <Image style={styles.workoutImage} source={{ uri: current.image }} />
      <Text style={styles.workoutName}>{current.name}</Text>
      <Text style={styles.workoutSet}>x{current.sets}</Text>
      {index + 1 >= excersise.length ? (
        <Pressable
          style={styles.doneButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.doneText}>DONE</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.doneButton}
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + current.calories);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
        >
          <Text style={styles.doneText}>DONE</Text>
        </Pressable>
      )}

      <Pressable style={styles.prevAndSkipButton}>
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={styles.prevAndSkip}
        >
          <Text style={styles.prevAndSkipText}>PREV</Text>
        </Pressable>
        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.prevAndSkip}
          >
            <Text style={styles.prevAndSkipText}>SKIP</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={styles.prevAndSkip}
          >
            <Text style={styles.prevAndSkipText}>SKIP</Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  workoutImage: {
    width: "100%",
    height: 370,
  },
  workoutName: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  workoutSet: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
  doneButton: {
    backgroundColor: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    borderRadius: 20,
    padding: 10,
    width: 200,
  },
  doneText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  prevAndSkipButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
  },
  prevAndSkip: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 100,
  },
  prevAndSkipText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
