import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text onPress={() => navigation.navigate('Auth')}>Shared CAB</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EFECF4',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
