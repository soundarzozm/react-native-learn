import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text} onPress={() => console.log('Hello World!')}>
        Welcome to your feed
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60,
  },
});

export default HomeScreen;
