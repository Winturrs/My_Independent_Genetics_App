import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from './Screens/Home';
import GeneticsScreen from './Screens/GeneticsScreen';
import GeneticResults from './Screens/GeneticResults';
export default class App extends React.Component{
  render(){
  return (
    <View >
<AppContainer/>

    </View>
  )
  }
}

var AppNavigator = createSwitchNavigator({
Home: Home,
GeneticsScreen: GeneticsScreen,
  GeneticResults:GeneticResults,
});

const AppContainer = createAppContainer(
  AppNavigator
);

