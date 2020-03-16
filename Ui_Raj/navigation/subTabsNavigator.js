//This is an example of React Native Tab
import React from 'react';
import {View, Text, Image} from 'react-native';
//import react in our code.

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createMaterialTopTabNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from '../screens/screen2';
import SecondPage from '../screens/screen3';
import ThirdPage from '../screens/screen4';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export

const TabScreen = createMaterialTopTabNavigator(
  {
    SiteVisit: {
      screen: FirstPage,
      //   navigationOptions: {
      //     tabBarLabel: <Text>Site Visit</Text>,
      //   },
    },
    BookingAmount: {
      screen: SecondPage,
      //   navigationOptions: {tabBarLabel: <Text>Booking Amount</Text>},
    },
    FirstCheque: {
      screen: ThirdPage,
      //   navigationOptions: {tabBarLabel: <Text>First Cheque</Text>},
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        width: '100%',
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 20,
      },

      activeTintColor: 'white',
      inactiveTintColor: 'blue',
      indicatorStyle: {height: 0},
      style: {
        backgroundColor: '#fff',
      },

      upperCaseLabel: false,
      showLabel: true,
      showIcon: false,
    },
    swipeEnabled: false,
    tabBarPosition: 'top',
    // tabBarOptions: {
    //   activeTintColor: '#FFFFFF',
    //   inactiveTintColor: '#F8F8F8',
    //
    //   labelStyle: {
    //     textAlign: 'center',
    //   },
    //   indicatorStyle: {
    //     borderBottomColor: '#87B56A',
    //     borderBottomWidth: 0,
    //   },
    // },
  },
);

//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: false,
    },
  },
});
export default createAppContainer(App);
