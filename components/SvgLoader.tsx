import React from 'react';
import HomeIcon from '../assets/icons/home.svg';
import SearchIcon from '../assets/icons/search.svg';
import NotificationIcon from '../assets/icons/bell.svg';
import ProfileIcon from '../assets/icons/user.svg';
import {TABS} from '../constants/enums';

const SvgLoader = props => {
  const renderIcon = icon => {
    switch (icon) {
      case TABS.HOME:
        return (
          <HomeIcon fill={props.active ? 'currentColor' : 'transparent'} />
        );
      case TABS.SEARCH:
        return (
          <SearchIcon fill={props.active ? 'currentColor' : 'transparent'} />
        );
      case TABS.NOTIFICATIONS:
        return (
          <NotificationIcon
            fill={props.active ? 'currentColor' : 'transparent'}
          />
        );
      case TABS.PROFILE:
        return (
          <ProfileIcon fill={props.active ? 'currentColor' : 'transparent'} />
        );
      default:
        return null;
    }
  };

  return <>{renderIcon(props.icon)}</>;
};

export default SvgLoader;
