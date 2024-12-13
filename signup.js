import React, { useLayoutEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);

  // Setting header options for the SignUp screen
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'SIGN UP',
      headerStyle: {
        backgroundColor: '#D9D9D9', 
        height: 100, 
      },
      headerTitleStyle: {
        fontFamily: 'Poppins', 
        color: '#000', 
        paddingVertical: 10, 
      },
    });
  }, [navigation]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Logo */}
      <Image source={require('../assets/pcb.png')} style={styles.logo} />

      <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
      
      {/* Username Input */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/user.png')} style={styles.icon} />
        <TextInput placeholder="username" style={styles.input} />
      </View>
      
      {/* Email Input */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/email.png')} style={styles.icon} />
        <TextInput placeholder="email" style={styles.input} />
      </View>

      {/* Password Input */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/password.png')} style={styles.icon} />
        <TextInput 
          placeholder="password" 
          style={styles.input} 
          secureTextEntry={!isPasswordVisible} 
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <Image 
            source={isPasswordVisible ? require('../assets/eyes.png') : require('../assets/eyess.png')} 
            style={styles.eyeIcon} 
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/password.png')} style={styles.icon} />
        <TextInput 
          placeholder="confirm password" 
          style={styles.input} 
          secureTextEntry={!isConfirmPasswordVisible} 
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIconContainer}>
          <Image 
            source={isConfirmPasswordVisible ? require('../assets/eyes.png') : require('../assets/eyess.png')} 
            style={styles.eyeIcon} 
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>
      
      {/* Social Media Sign Up Section */}
      <Text style={styles.signUpUsing}>OR</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/fb.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* Back to Login Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Back to Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 500, // Adjust as needed
    height: 400, // Adjust as needed
    marginBottom: -100,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  icon: {
    width: 24, // Adjust icon size
    height: 24, // Adjust icon size
    marginHorizontal: 10, // Space between icon and text input
  },
  input: {
    flex: 1, // Take remaining space
    padding: 10,
  },
  eyeIconContainer: {
    padding: 10,
    justifyContent: 'center', // Center the eye icon vertically
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  signUpButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 50,
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backText: {
    marginTop: 20,
    color: 'black',
  },
  signUpUsing: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '50%', // Adjust width as necessary
  },
  socialIcon: {
    width: 40, // Adjust icon size
    height: 40, // Adjust icon size
  },
  backButton: {
    marginTop: 20, // Additional spacing above the button
  },
});