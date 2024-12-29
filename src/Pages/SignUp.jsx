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
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Auth from './Auth';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust for iOS and Android
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.header}>Sign Up</Text>

          {/* Name Input */}
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Full Name"
            onChangeText={e => setName(e)}
          />

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

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => Auth.signUp(name, email, password)}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: '40%',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'lightgray',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
  },
  scrollView: {
    paddingBottom: 30, // To ensure there's enough space when the keyboard is shown
  },
});

export default SignupScreen;
