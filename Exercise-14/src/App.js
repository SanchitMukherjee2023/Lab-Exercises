import React from 'react';
import ImageDisplay from './components/ImageDisplay';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <div>
      <ImageDisplay />
      <hr></hr>
      <LoginForm />
      <hr></hr>
      <ProfilePage />
    </div>
  );
};

export default App;
