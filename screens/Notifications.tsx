import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => console.log('Notifications')}>
        Welcome to your notifications
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

export default NotificationScreen;
