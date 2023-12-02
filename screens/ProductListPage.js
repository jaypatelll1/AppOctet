import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import productList from "../data/productList";

const LIST_VIEW = "list";
const GRID_VIEW = "grid";

const ProductListPage = ({ navigation }) => {
  const [viewType, setViewType] = useState(LIST_VIEW);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productList);

  const handleProductClick = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  const ProductItem = ({ item }) => {
    if (
      !item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return <View />;
    }

    return (
      <TouchableOpacity onPress={() => handleProductClick(item)}>
        <View
          style={viewType === LIST_VIEW ? styles.listItem : styles.gridItem}
        >
          <Image source={item.imageUrl} style={styles.productImage} />
          <View
            style={
              viewType === LIST_VIEW
                ? styles.textContainerlist
                : styles.textContainergrid
            }
          >
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text
              style={
                viewType === LIST_VIEW
                  ? styles.productDescriptionlist
                  : styles.productDescriptiongrid
              }
              numberOfLines={viewType === GRID_VIEW ? 2 : undefined}
              ellipsizeMode="tail"
            >
              {item.description}
            </Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    const filtered = productList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity
            onPress={() => setSearchTerm("")}
            style={styles.clearButton}
          >
            <MaterialIcons name="clear" size={20} color={colors.text} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
          <MaterialIcons name="filter-list" size={24} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setViewType(viewType === LIST_VIEW ? GRID_VIEW : LIST_VIEW)
          }
          style={styles.viewButton}
        >
          <MaterialIcons
            name={viewType === LIST_VIEW ? "grid-on" : "list"}
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        key={viewType}
        keyExtractor={(item) => item.id + viewType}
        renderItem={ProductItem}
        numColumns={viewType === GRID_VIEW ? 2 : 1}
      />
    </View>
  );
};

const colors = {
  primary: "#F3EEEA",
  background: "#F3EEEA",
  text: "#776B5D",
  buttonText: "#fff",
  shadow: "#000",
  accent: "#776B5D",
  border: "#ddd",
  card: "#EBE3D5",
  black: "#000",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 8,
    marginBottom: 1,
    width: "70%",
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
  },
  clearButton: {
    marginLeft: 8,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    margin: 8,
    backgroundColor: colors.card,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: "95%",
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    margin: 8,
    backgroundColor: colors.card,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    height: 300,
    width: 186,
    borderWidth: 1,
    borderColor: colors.border,
  },
  productImage: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
  },
  textContainerlist: {
    flex: 1,
    alignItems: "left",
  },
  textContainergrid: {
    flex: 1,
    alignItems: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: colors.text,
  },
  productDescriptionlist: {
    fontSize: 14,
    color: colors.text,
    textAlign: "left",
  },
  productDescriptiongrid: {
    fontSize: 14,
    color: colors.text,
    textAlign: "center",
  },
  productPrice: { 
    fontSize: 14, 
    color: colors.text, 
    textAlign: "left" },
  addButton: {
    marginTop: 8,
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    width: 120,
  },
  addButtonText: {
    color: colors.buttonText,
    fontWeight: "bold",
  },
});

export default ProductListPage;
