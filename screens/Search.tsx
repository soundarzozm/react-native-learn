import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => console.log('Search')}>
        Welcome to search
      </Text>
    </View>
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

export default SearchScreen;
