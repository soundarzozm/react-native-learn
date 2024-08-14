import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Hello World!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
