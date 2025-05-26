import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <Text style={styles.text}>Esse é o app da Home! Clique nos ícones da navbar para navegar entre os outros apps!</Text>
      <Image
        source={require("@/assets/images/home.png")}
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
  text: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
  },
});
