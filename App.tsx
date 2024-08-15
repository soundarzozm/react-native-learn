import React, {useState} from 'react';
import Layout from './components/Layout';
import HomeScreen from './screens/Home';
import NotificationScreen from './screens/Notifications';
import ProfileScreen from './screens/Profile';
import SearchScreen from './screens/Search';
import {TABS} from './constants/enums';

const App = () => {
  const [activeTab, setActiveTab] = useState(TABS.HOME);

  const renderScreen = (currentTab: TABS) => {
    switch (currentTab) {
      case TABS.HOME:
        return <HomeScreen />;
      case TABS.NOTIFICATIONS:
        return <NotificationScreen />;
      case TABS.PROFILE:
        return <ProfileScreen />;
      case TABS.SEARCH:
        return <SearchScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderScreen(activeTab)}
    </Layout>
  );
};

export default App;
