import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ProductDetailPage = ({ route, navigation }) => {
  const { product } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <AntDesign name="back" size={24} color="#776B5D" />
      </TouchableOpacity>
      <Image source={product.imageUrl} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const colors = {
  background: "#F3EEEA",
  text: "#776B5D",
  buttonText: "#fff",
  accent: "#776B5D",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  productImage: {
    width: "100%",
    height: "55%",
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 16,
    marginTop: 28,
  },
  detailsContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.text,
  },
  productDescription: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  priceContainer: {
    alignItems: "center",
  },
  priceLabel: {
    fontSize: 18,
    color: colors.text,
  },
  productPrice: {
    fontSize: 18,
    color: colors.text,
  },
  addToCartButton: {
    backgroundColor: colors.accent,
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetailPage;
