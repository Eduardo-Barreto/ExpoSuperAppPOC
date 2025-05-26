import { Link } from "expo-router";
import { Text, View, Image, StyleSheet, Button, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <Text>Chameleon.</Text>
      <Image
        source={require("@/assets/images/chameleon.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});
