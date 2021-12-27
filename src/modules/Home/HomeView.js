import React from 'react';

import Header from '../../components/Header/HeaderView';
import HomeHandler from './HomeHandler';

const HomeView = () => {
  const { isAuthenticated, user, handleNotAuthenticated } = HomeHandler();

  const { fullName } = user;

  return (
    <div>
      <Header
        isAuthenticated={isAuthenticated}
        handleNotAuthenticated={handleNotAuthenticated}
      />
      <div>
        {!isAuthenticated ? (
          <h1>Welcome! Please login to continue</h1>
        ) : (
          <div>
            <h1>You have login succcessfully!</h1>
            <h2>Welcome {fullName}!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeView;