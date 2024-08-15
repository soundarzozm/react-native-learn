import React from 'react';
import Tabs from './Tabs';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import NotificationScreen from '../screens/Notifications';
import ProfileScreen from '../screens/Profile';
import {StyleSheet, View} from 'react-native';
import {TABS} from '../constants/enums';

const tabs = [
  {
    route: 'Home',
    component: <HomeScreen />,
    title: 'Home',
    icon: TABS.HOME,
  },
  {
    route: 'Search',
    component: <SearchScreen />,
    title: 'Search',
    icon: TABS.SEARCH,
  },
  {
    route: 'Notifications',
    component: <NotificationScreen />,
    title: 'Notifications',
    icon: TABS.NOTIFICATIONS,
  },
  {
    route: 'Profile',
    component: <ProfileScreen />,
    title: 'Profile',
    icon: TABS.PROFILE,
  },
];

const Layout = (props: any) => {
  return (
    <View style={styles.container}>
      {props.children}
      <Tabs
        tabs={tabs}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default Layout;
