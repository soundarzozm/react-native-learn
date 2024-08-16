import React from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import mockData from '../data/mock/home.json';
import Tweet from '../components/Tweet';
import TwitterIcon from '../assets/icons/twitter.svg';
import ProfileIcon from '../assets/icons/user.svg';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.profileIcon}>
          <ProfileIcon />
        </TouchableOpacity>
        <TwitterIcon style={styles.twitterIcon} />
      </View>
      <ScrollView>
        {mockData.map(tweetData => {
          return <Tweet tweetData={tweetData} key={tweetData.id} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  },
  headerContainer: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  twitterIcon: {
    margin: 10,
  },
  profileIcon: {
    position: 'absolute',
    left: 12,
    bottom: 10,
  },
});

export default HomeScreen;
