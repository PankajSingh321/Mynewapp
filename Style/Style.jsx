import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      marginTop:'40%',
      textAlign:'center'
      

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
    signupText: {
      color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
    },
  });