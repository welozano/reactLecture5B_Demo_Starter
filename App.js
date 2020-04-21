import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import * as pages from './App/pages';

const ParamsNav = createStackNavigator({
  Params: {screen: pages.ParamsFunction},
});

const StackNav = createStackNavigator({
  Home: {screen: pages.ItBeLikeThat},
  
},{
  initialRouteName: 'Home',
  //mode: 'modal',
});



const MyApp = createAppContainer(StackNav);
export default MyApp;
