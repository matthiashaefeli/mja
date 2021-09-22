import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function HomeScreen(props) {
	const [region, setRegion] = useState('')

	const getInitialState = () => {
		return {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
		};
	}

	const onRegionChange = (region) => {
		this.setState({ region });
	}

	return (
		<View>
			<Text>Home Screen</Text>
			<MapView
				region={region.region}
      	// onRegionChange={this.onRegionChange}
				style={{height: '80%', width: '100%'}} />
		</View>
	)
}
