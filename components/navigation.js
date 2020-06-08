import React from 'react';
import NavButton from './navigation-button';
import TextTitle from './text-title.js';
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
} from './icons';
import styles from './navigation.module.css';

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedKey === 'home'}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'explore'}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavButton>

      <NavButton notify="17" selected={selectedKey === 'notifications'}>
        <Notification />
        <TextTitle>Notifications</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'messages'}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'bookmarks'}>
        <Bookmark />
        <TextTitle>Bookmarks</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'lists'}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'profile'}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'more'}>
        <More />
        <TextTitle>More</TextTitle>
      </NavButton>
    </nav>
  );
}

export default Navigation;
