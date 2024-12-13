import React, { useLayoutEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'LOG IN',
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

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('dashboard'); 
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/pcb.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/user.png')} style={styles.icon} />
          <TextInput 
            placeholder="Username" 
            style={styles.input} 
            value={username} 
            onChangeText={setUsername} 
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/password.png')} style={styles.icon} />
          <TextInput 
            placeholder="Password" 
            style={styles.input} 
            secureTextEntry={!isPasswordVisible} 
            value={password} 
            onChangeText={setPassword} 
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
            <Image 
              source={isPasswordVisible ? require('../assets/eyes.png') : require('../assets/eyes.png')} 
              style={styles.eyeIcon} 
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Text style={styles.signUpText}>
        DON’T HAVE AN ACCOUNT? 
        <Text 
          style={styles.signUpLink} 
          onPress={() => navigation.navigate('signup')}
        >
          SIGN UP
        </Text>
      </Text>
      <Text style={styles.signUpUsing}>SIGN UP USING</Text>
      <View style={styles.socialIconsContainer}>
        <Image source={require('../assets/fb.png')} style={styles.icon} />
        <Image source={require('../assets/google.png')} style={styles.icon} />
        <Image source={require('../assets/apple.png')} style={styles.icon} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  logo: {
    width: 500,
    height: 400,
    marginBottom: -100,
  },
  inputContainer: {
    width: '70%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  eyeIconContainer: {
    padding: 10,
    justifyContent: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  signInButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#555',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 12,
    color: '#000',
  },
  signUpLink: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  signUpUsing: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});