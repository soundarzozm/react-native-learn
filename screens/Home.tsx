import React from 'react';
import {StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';
import mockData from '../data/mock/home.json';
import Tweet from '../components/Tweet';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        {mockData.map(tweetData => {
          return <Tweet tweetData={tweetData} key={tweetData.id} />;
        })}
      </ScrollView>
    </SafeAreaView>
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
  header: {
    height: 150,
  },
});

export default HomeScreen;
