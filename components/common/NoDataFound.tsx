import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoDataFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📄</Text>
      <Text style={styles.message}>No Data Found!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});

export default NoDataFound;
