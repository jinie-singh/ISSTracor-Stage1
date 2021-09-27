import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocationScreen';
import MeteorScreen from './screens/MeteorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MeteorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
