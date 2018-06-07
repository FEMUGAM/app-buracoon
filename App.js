import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -3.1067,
          longitude: -60.0000,
          latitudeDelta: 0.1422,
          longitudeDelta: 0.1421,
        }}
      >
        <MapView.Marker 
          key={1}
          coordinate={{latitude: -3.0425, longitude: -60.0048}}
          title={"Grave"}
          description={"Cidade Nova"}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
