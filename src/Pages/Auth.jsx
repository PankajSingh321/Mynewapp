import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const signUp = (fullname, email, password) => {
  console.log('Signup button pressed');
  if (!fullname || !email || !password) {
    Alert.alert('Error', 'Please fill in all fields');
  } else {
    return auth()
      .createUserWithEmailAndPassword(email.trim(), password) // Correct usage
      .then(cred => {
        const {uid} = cred.user;
        auth().currentUser.updateProfile({
          displayName: fullname,
        });
        return uid;
      })
      .catch(err => Alert.alert(err.code, err.message));
  }
};

const signIn = (email, password) => {
  // Check if email and password are provided
  if (!email || !password) {
    Alert.alert('enter all details');

    return Promise.reject(new Error('Please enter both email and password')); // Exit function if email or password is empty
  }

  // Sign-in using Firebase Authentication
  return auth()
    .signInWithEmailAndPassword(email.trim(), password) // Firebase method to sign in
    .then(userCredential => {
      // Successful sign-in
      console.log('User UID:', userCredential.user.uid); // Log the UID of the current user
      return userCredential; // Optionally return the userCredential if you need it elsewhere
    })
    .catch(err => {
      // Handle any errors during the sign-in process
      console.log('Login failed:', err); // Log the error for debugging
      Alert.alert(
        'Login Failed',
        err.message || 'An error occurred during sign-in',
      );
    });
};

const signOut = () => {
  return auth().signOut(); // Correct usage
};

const Auth = {
  signUp,
  signIn,
  signOut,
};

export default Auth;
