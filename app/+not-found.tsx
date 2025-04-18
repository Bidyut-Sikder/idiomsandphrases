import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const NotFound = () => {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Not Found</Text>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({})

export default NotFound;
