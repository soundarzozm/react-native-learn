import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import ProfileIcon from '../assets/icons/user.svg';

const Tweet = props => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          {props.tweetData.profilePicture ? (
            <Image style={styles.profilePicture} width={30} height={30} />
          ) : (
            <ProfileIcon style={styles.profilePicture} width={30} height={30} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.metaData}>
          <Text style={styles.name}>{props.tweetData.name}</Text>
          <Text style={styles.username}>@{props.tweetData.username}</Text>
        </View>
        <Text style={styles.tweet}>{props.tweetData.tweet}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingVertical: 20,
    borderWidth: 0,
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  profilePicture: {
    borderRadius: 50,
    margin: 5,
  },
  contentContainer: {
    marginLeft: 10,
    paddingRight: 10,
  },
  metaData: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  username: {
    opacity: 0.7,
  },
  tweet: {
    flexWrap: 'wrap',
  },
});

export default Tweet;
