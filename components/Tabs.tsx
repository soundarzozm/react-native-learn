import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import SvgLoader from './SvgLoader';

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tabItem, activeTab === index && styles.activeTabItem]}
          onPress={() => setActiveTab(index)}>
          <SvgLoader icon={tab.icon} active={activeTab === index} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingBottom: 30,
    paddingTop: 10,
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
  },
});

export default Tabs;
