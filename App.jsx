import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/Pages/Login'
import SignupScreen from './src/Pages/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import ProfilePage from './src/Pages/ProfileP'
import LocationComponent from './src/Pages/GeoLocation'



const stack = createStackNavigator()

const App = () => {
   return (
    <NavigationContainer>
    <stack.Navigator initialRouteName='Login'>
        <stack.Screen name = 'Login' component={LoginScreen}/>
        <stack.Screen name = 'SignUp' component={SignupScreen}/>
        <stack.Screen name ='ProfileP' component={ProfilePage}/>
        <stack.Screen name = 'GeoLocation' component={LocationComponent}/>
       
      </stack.Navigator>
      </NavigationContainer>
     
  )
}

export default App