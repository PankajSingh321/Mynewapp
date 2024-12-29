import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './Navigator';
import AuthNavigator from './AuthNavigator';
import auth from '@react-native-firebase/auth';

const AppContainer = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Auth state change listener
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    // Set up the listener for authentication state changes
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;  // Clean up the listener when the component unmounts
  }, []);

  if (initializing) return null; // Optionally, you can show a loading indicator here

  return (
    <NavigationContainer>
      {user ? <MainNav /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppContainer;
