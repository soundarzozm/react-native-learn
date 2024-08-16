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
import LikeIcon from '../assets/icons/heart.svg';
import ReplyIcon from '../assets/icons/message-circle.svg';
import RetweetIcon from '../assets/icons/repeat.svg';
import BookmarkIcon from '../assets/icons/bookmark.svg';
import ShareIcon from '../assets/icons/share.svg';

const Tweet = (props: any) => {
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
        <View style={styles.actions}>
          <ReplyIcon height={15} width={15} style={styles.actionIcon} />
          <RetweetIcon height={15} width={15} style={styles.actionIcon} />
          <LikeIcon height={15} width={15} style={styles.actionIcon} />
          <BookmarkIcon height={15} width={15} style={styles.actionIcon} />
          <ShareIcon height={15} width={15} style={styles.actionIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  actionIcon: {
    opacity: 0.7,
  },
  container: {
    display: 'flex',
    paddingVertical: 20,
    borderWidth: 0,
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    flexDirection: 'row',
  },
  profilePicture: {
    borderRadius: 50,
  },
  contentContainer: {
    marginLeft: 10,
    paddingRight: 10,
    width: Dimensions.get('screen').width - 70,
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
