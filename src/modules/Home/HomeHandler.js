import { useEffect, useState } from 'react';
import { get } from 'lodash';

import UserService from '../../services/UserService';

const HomeHandler = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await UserService.getAuthUser();
      if(response.status === 200) {
        setUser(get(response, 'data.user'));
        setIsAuthenticated(true);
      }
    } catch (err) {
      throw new Error(get(err, 'message', 'HomeHandler.getUser'));
    }
  };

  const handleNotAuthenticated = () => {
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    getUser,
    handleNotAuthenticated
  }
}

export default HomeHandler;