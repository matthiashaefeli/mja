import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';

export default function HomeScreen(props) {
	const [region, setRegion] = useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	})

	return (
		<View>
			<Text>MJAPP</Text>
			<MapView
				initialRegion={region}
				style={{height: '80%', width: '100%'}}
				// provider={PROVIDER_GOOGLE}
				// showsUserLocation={true}
				/>
		</View>
	)
}
