import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const ProfilePage = () => {
  return (
    <div>
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
};

export default ProfilePage;
