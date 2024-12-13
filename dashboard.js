import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

export default function Dashboard() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setLoading(false);
    if (!result.canceled) {
      setImage(result.uri);
      setErrors([
        { id: 1, type: 'Missing hole' },
        { id: 2, type: 'Spurious trace' },
      ]);
    }
  };

  const captureImage = async () => {
    setLoading(true);
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setLoading(false);
    if (!result.canceled) {
      setImage(result.uri);
      setErrors([
        { id: 1, type: 'Missing hole' },
        { id: 2, type: 'Spurious trace' },
      ]);
    }
  };

  // Sample project data
  const projects = [
    {
      id: 1,
      status: 'complete',
      imageUri: require('../assets/copper.png'),
      errors: [],
    },
    {
      id: 2,
      status: 'complete',
      imageUri: require('../assets/pin.png'),
      errors: [{ id: 1, type: 'Missing hole' }],
    },
    {
      id: 3,
      status: 'complete',
      imageUri: require('../assets/close.png'),
      errors: [{ id: 1, type: 'Spurious trace' }],
    },
    {
      id: 4,
      status: 'complete',
      imageUri: require('../assets/bite.png'),
      errors: [],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, User!</Text>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
      </View>
      <View style={styles.tabNavigation}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>PROJECTS</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.projectsHeader}>
          <Text style={styles.recentProjectsHeader}>Recent Projects</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <View style={styles.recentProjects}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              status={project.status}
              imageUri={project.imageUri}
              errors={project.errors}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomButton} onPress={pickImage}>
          <Image source={require('../assets/upload.png')} style={styles.icon} />
          <Text style={styles.bottomText}>Upload Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.captureButton} onPress={captureImage}>
          <Image source={require('../assets/camera.png')} style={styles.captureIcon} />
          <Text style={styles.bottomText}>Capture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('result', { image, errors })}
        >
          <Image source={require('../assets/result.png')} style={styles.icon} />
          <Text style={styles.bottomText}>View Results</Text>
        </TouchableOpacity>
      </View>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.capturedImage} />
        </View>
      )}
      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />}
    </View>
  );
}

function ProjectCard({ status, errors, imageUri }) {
  return (
    <View style={styles.projectCard}>
      <Image source={imageUri} style={styles.projectImage} />
      <View style={styles.projectStatusContainer}>
        <Text style={styles.projectStatus}>
          {status === 'in-progress' ? `${errors.length} errors detected` : 'Complete'}
        </Text>
        {status === 'complete' && (
          <Image source={require('../assets/check.png')} style={styles.checkIcon} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 20,
    backgroundColor: '#FFD700',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginLeft: 100,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 10,
  },
  tabNavigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#ffffff',
  },
  tabButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  scrollContainer: {
    padding: 20,
  },
  projectsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  recentProjectsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#000000',
  },
  recentProjects: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  projectCard: {
    width: '48%',
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  projectImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  projectStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  projectStatus: {
    textAlign: 'center',
    marginRight: 5,
    fontSize: 12,
  },
  checkIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    paddingVertical: 0,
  },
  bottomButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  captureButton: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 30,
  },
  captureIcon: {
    width: 75,
    height: 75,
    marginTop: -20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  bottomText: {
    fontSize: 15,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  capturedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  loadingIndicator: {
    marginLeft: 5,
  },
});
