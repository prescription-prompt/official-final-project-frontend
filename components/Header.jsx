import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>HBG</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
