import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import productList from '../data/productList';
import { MaterialIcons } from '@expo/vector-icons'; // Import icons

const LIST_VIEW = 'list';
const GRID_VIEW = 'grid';

const ProductListPage = ({ navigation }) => {
  const [viewType, setViewType] = useState(LIST_VIEW);

  const keyExtractor = (item) => item.id + viewType;

  const handleProductClick = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const ProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductClick(item)}>
      <View style={viewType === LIST_VIEW ? styles.listItem : styles.gridItem}>
        <Image source={item.imageUrl} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
  data={productList}
  key={viewType} // Add this line
  keyExtractor={keyExtractor}
  renderItem={ProductItem}
  numColumns={viewType === GRID_VIEW ? 2 : 1}
/>

      <TouchableOpacity onPress={() => setViewType(viewType === LIST_VIEW ? GRID_VIEW : LIST_VIEW)} style={styles.toggleButton}>
  <Text style={styles.toggleButtonText}>
    {`Switch to ${viewType === LIST_VIEW ? 'Grid' : 'List'} View`}
    <MaterialIcons name={viewType === LIST_VIEW ? 'grid-on' : 'list'} size={24} color="blue" />
  </Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Add a background color
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff', // Use a card design
    borderRadius: 5, // Round the corners
    marginBottom: 10, // Add some margin
    shadowColor: '#000', // Add a drop shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Use a card design
    borderRadius: 5, // Round the corners
    margin: 5, // Add some margin
    shadowColor: '#000', // Add a drop shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
  },
  toggleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  toggleButtonText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ProductListPage;
