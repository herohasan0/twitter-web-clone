import React from 'react';
import * as icons from '../components/icons';
import Photo from '../components/photo';
import ProfileBox from '../components/profile-box';

export default {
  title: 'Icons',
};

export const Icons = () => (
  <div className="icons">
    <icons.ArrowBottom />
    <icons.Bookmark />
    <icons.BookmarkFill />
    <icons.Emoji />
    <icons.Explore />
    <icons.ExplorerFill />
    <icons.Gif />
    <icons.Home />
    <icons.HomeFill />
    <icons.Like />
    <icons.Lists />
    <icons.ListsFill />
    <icons.Media />
    <icons.Messages />
    <icons.MessagesFill />
    <icons.More />
    <icons.Notification />
    <icons.NotificationFill />
    <icons.Options />
    <icons.Profile />
    <icons.ProfileFill />
    <icons.Question />
    <icons.Reply />
    <icons.Retweet />
    <icons.Search />
    <icons.Share />
    <icons.TimelineProp />
    <icons.Twitter />
  </div>
);

export const ProfilePhoto = () => <Photo />;
export const Box = () => <ProfileBox />;
