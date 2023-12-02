import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListPage from './screens/ProductListPage';
import ProductDetailPage from './screens/ProductDetailPage';
import Splash from './screens/Splash'; 
import { StyleSheet, StatusBar, View } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="ProductList" component={ProductListPage} />
          <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight-50,
  },
});

export default App;
