import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Image, Text } from "react-native";

const RestScreen = () => {
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);
  const navigation = useNavigation();

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  });

  return (
    <SafeAreaView>
      <Image
        style={styles.restImage}
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
      />
      <Text style={styles.restText}>TAKE A BREAK!</Text>
      <Text style={styles.timeLeft}>{timeLeft}</Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({
  restImage: {
    width: "100%",
    height: 420,
  },
  restText: {
    fontSize: 30,
    fontWeight: "900",
    marginTop: 50,
    textAlign: "center",
  },
  timeLeft: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 50,
    textAlign: "center",
  },
});
