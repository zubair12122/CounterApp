import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const index = () => {
  const [count, setinc] = useState(0);
  const increment = () => setinc(count + 1);
  const decrement = () => setinc(count - 1);
  const reset = () => setinc(count * 0);
  return (
    <View style={styles.container}>
      <Text style={styles.welText}>Welcome to the CounterApp</Text>
      <View style={styles.resultScreen}>
        <Text
          style={{
            alignSelf: "center",
            marginVertical: "10%",
            fontWeight: "700",
            fontSize: 30,
          }}
        >
          {count}
        </Text>
      </View>
      <Pressable
        onPress={increment}
        style={{
          borderWidth: 2,
          width: "70%",
          borderRadius: 20,
          backgroundColor: "black",
        }}
      >
        <Text
          style={{
            fontSize: 77,
            color: "white",
            alignSelf: "center",
          }}
        >
          +
        </Text>
      </Pressable>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={{
            borderWidth: 2,
            borderRadius: 20,
            alignSelf: "center",
            alignItems: "center",
            width: "20%",
          }}
        >
          <Text onPress={decrement} style={{ fontSize: 77 }}>
            -
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 2,
            borderRadius: 20,
            alignSelf: "center",
            alignItems: "center",
            width: "20%",
            marginLeft: "60%",
          }}
        >
          <Text
            onPress={reset}
            style={{
              fontSize: 20,
            }}
          >
            res
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: "10%",
    backgroundColor: "grey",
    flex: 1,
    height: "100%",
  },
  welText: {
    fontWeight: "900",
    fontSize: 25,
    letterSpacing: 2,
    marginVertical: "5%",
  },
  resultScreen: {
    alignContent: "center",
    borderWidth: 2,
    width: "80%",
    height: "40%",
  },
});
