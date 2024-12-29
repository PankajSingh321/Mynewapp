import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';

const ProfilePage = ({navigation}) => {
  const openLink = url => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.mainImage}
          source={require('../Assets/Images/pankajsingh.png')}
        />
        <Text style={styles.profileName}>Pankaj Singh</Text>
        <Text style={styles.profileBio}>
          Web developer | Tech enthusiast | Lifelong learner
        </Text>
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>Contact Information</Text>
        <Text style={styles.contactItem}>
          <Text style={styles.contactLabel}>Email: </Text>panku6580@gmail.com
        </Text>
        <Text style={styles.contactItem}>
          <Text style={styles.contactLabel}>Phone: </Text>+918477906010
        </Text>
        <Text style={styles.contactItem}>
          <Text style={styles.contactLabel}>Website: </Text>
          https://www.youtube.com
        </Text>
      </View>

      <View style={styles.socialMedia}>
        <Text style={styles.contactTitle}>Follow Me</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity
            onPress={() => openLink('https://www.instagram.com/')}>
            <Image
              style={styles.image}
              source={require('../Assets/instagram.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://www.facebook.com/')}>
            <Image
              style={styles.image}
              source={require('../Assets/Facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://www.youtube.com/@pkvvlogger6051')}>
            <Image
              style={styles.image}
              source={require('../Assets/youtube.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
         onPress={()=>navigation.navigate('GeoLocation')}
          style={{
            backgroundColor: 'lightgrey',
            padding: 10,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 4,
            marginTop: 20,
           }}
          
          >
          <Text style={{textAlign: 'center', fontSize: 18,fontWeight:800}}>
            Go to Geolocation
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  mainImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileBio: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },
  contactInfo: {
    marginTop: 30,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  contactLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  socialMedia: {
    marginTop: 30,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100, // To make the image circular
  },
});

export default ProfilePage;
