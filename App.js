import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import onBoardingScreen from './screens/onBoarding';
import SignUpScreen from './screens/signUp.js'
import ProfileScreen from './screens/profile';

const AppContainer = createStackNavigator({
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerShown: false,
		},
	},

	
});

const AuthStack = createStackNavigator({
	Register: {
		screen: SignUpScreen,
		navigationOptions: {
			headerShown: false,
		},
	},

	Login: {
		screen: LoginScreen,
		navigationOptions: {
			headerShown: false,
		},
	},

	onBoarding: {
		screen: onBoardingScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
	
});

export default createAppContainer(
	createSwitchNavigator(
		{
			Loading: LoadingScreen,
			Auth: AuthStack,
			Profile: ProfileScreen,
			App: AppContainer,


		},
		{
			initialRouteName: 'Auth',
		}
	)
);
