import React from 'react';
import { Link } from "react-router-dom";

import HeaderHandler from './HeaderHandler';

const HeaderView = props => {
  const { handleLogoutClick, handleSignInClick } = HeaderHandler(props);
  const { isAuthenticated } = props;

  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      {isAuthenticated ? (
        <li style={{ cursor: 'pointer' }} onClick={handleLogoutClick}>Logout</li>
      ) : (
        <li style={{ cursor: 'pointer' }} onClick={handleSignInClick}>Login</li>
      )}
    </ul>
  );
}

export default HeaderView;