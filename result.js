import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultScreen({ navigation }) {
  // Mock data for demonstration
  const errors = [
    { id: 1, type: 'Copper', description: 'Error 1: Copper' },
    { id: 2, type: 'Short', description: 'Error 2: Short' },
    { id: 3, type: 'Open', description: 'Error 3: Open' },
    { id: 4, type: 'Pin-hole', description: 'Error 4: Pin-hole' },
  ];

  const feedbacks = {
    open: 'Defect Type: Open Circuit\nImpact: Electrical connectivity issues.\nSolution: Check for broken traces or disconnects.',
    short: 'Defect Type: Short Circuit\nImpact: Excessive current flow, potential overheating.\nSolution: Inspect for unintended connections between traces.',
    copper: 'Defect Type: Copper Puddles\nImpact: Insulation issues.\nSolution: Ensure proper etching and copper deposition processes.',
    'pin-hole': 'Defect Type: Pin-hole\nImpact: Weak solder joints.\nSolution: Improve surface finish and soldering techniques.',
  };

  const handleBack = () => {
    navigation.navigate('dashboard'); // Navigate to dashboard screen
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Go Back Button */}
        <TouchableOpacity onPress={handleBack}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* RESULTS Button (Centered) */}
        <View style={styles.centerContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadText}>RESULTS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/copper.png')} style={styles.pcbImage} />
      </View>

      {/* Error Feedback Section */}
      <Text style={styles.errorCount}>Errors Detected: {errors.length}</Text>
      <ScrollView contentContainerStyle={styles.errorList}>
        {errors.map((error) => (
          <View key={error.id} style={styles.errorItem}>
            <View style={styles.errorImagePlaceholder}>
              <Text style={styles.errorType}>{error.type}</Text>
            </View>
            <Text style={styles.errorDescription}>
              {error.description}
              {"\n\n"} {/* Add spacing for better readability */}
              <Text style={styles.feedbackText}>{feedbacks[error.type.toLowerCase()]}</Text>
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  centerContainer: {
    flex: 1, // This ensures the upload button is centered
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#E5BE21',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 50,
    justifyContent: 'center',
  },
  uploadText: {
    color: '#00000',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  pcbImage: {
    width: 400,
    height: 400,
    borderRadius: 10,
  },
  errorCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  errorList: {
    paddingBottom: 20,
  },
  errorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  errorImagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  errorType: {
    fontSize: 12,
    color: '#555',
  },
  errorDescription: {
    fontSize: 14,
    color: '#FF0000',
  },
  feedbackText: {
    fontSize: 12,
    color: '#666',
    marginTop: 0,
  },
});
