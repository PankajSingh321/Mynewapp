import React, { useState } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid, Linking, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationComponent = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to request permission
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation(); // Call to get location if permission granted
      } else {
        console.log('Location permission denied');
        Alert.alert('Permission Denied', 'You need to allow location permission');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Function to get the current location
  const getCurrentLocation = () => {
    setLoading(true); // Set loading state to true while getting location
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        setLoading(false); // Set loading state to false once location is obtained
        console.log(latitude, longitude);
      },
      error => {
        setLoading(false); // Stop loading in case of error
        Alert.alert('Error', error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  // Function to open the location in Google Maps
  const openMaps = () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation;
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url);
    } else {
      Alert.alert('Location Not Available', 'Current location is not available yet');
    }
  };

  return (
    <View style={{ padding: 20, alignItems:'center' }}>
      <Text style={{marginBottom:10,textAlign:'center',fontWeight:700,fontSize:18}}>Get Coords</Text>
      
      <View>
        <Text >
          Latitude: {currentLocation ? currentLocation.latitude : 'Loading...'}{"\n"}
          Longitude: {currentLocation ? currentLocation.longitude : 'Loading...'}
        </Text>
      </View>

      <TouchableOpacity onPress={requestLocationPermission}>
        <View style={{ marginTop: 20, backgroundColor: '#007bff', padding: 10,borderRadius:4 }}>
          <Text style={{ color: 'white',fontSize:17,textAlign:'center' }}>{loading ? 'Loading...' : 'Get Location'}</Text>
        </View>
      </TouchableOpacity>

      {currentLocation && (
        <TouchableOpacity onPress={openMaps}>
          <View style={{ marginTop: 20, backgroundColor: '#28a745', padding: 10,borderRadius:4 }}>
            <Text style={{ color: 'white', textAlign:'center', fontSize:17 }}>Open in Maps</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LocationComponent;
