
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [fontLoaded, setFontLoaded] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/login'); 
    }, 3000); // Time until redirect
    return () => clearTimeout(timeout); 
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/open.png')} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, fontLoaded && { fontFamily: 'Poppins' }]}>
          PXRT
        </Text>
        <ActivityIndicator size="large" color="#25292e" style={styles.loadingIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between logo and text
    paddingVertical: 50, // Optional padding for top and bottom
  },
  logoContainer: {
    alignItems: 'center', // Center the logo horizontally
    marginTop: 320, // Space at the top
  },
  logo: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flexDirection: 'row', // Display text and loading icon next to each other
    alignItems: 'center', // Center vertically
    marginBottom: 0, // Space below the text container
  },
  text: {
    color: '#000000',
    fontSize: 24,
    marginRight: 10, // Space between text and loading icon
  },
  loadingIcon: {
    marginLeft: 0, // Space after the loading icon
  },
});
