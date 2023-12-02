import React, { useEffect } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("ProductList");
    }, 2000); 
  return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require("../assets/logo.jpg")} 
        style={styles.logo}
      />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9e2d0", 
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 16,
  },
});

export default Splash;
