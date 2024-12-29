import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {styles} from '../../Style/Style'; // Assuming you have your custom styles here
import {useNavigation} from '@react-navigation/native';
import Auth from './Auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Call the signIn function and handle the success/failure
    Auth.signIn(email, password)
      .then((userCredential) => {
        // If login is successful, navigate to the ProfileP screen
        if (userCredential) {
          navigation.navigate('ProfileP');
        }
      })
      .catch((err) => {
        // Error handling is already done inside the signIn function
        // So we don't need to do anything here
      });
  };
  

  

return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust for iOS and Android
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Login</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={e => setEmail(e)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={e => setPassword(e)}
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
