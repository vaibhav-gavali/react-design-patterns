import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  // add empty dependency to call the useEffect only once even
  // if the containing component will rerender everytime
  useEffect(() => {
    (async () => {
      const response = await axios.get('/current-user');
      setUser(response.data);
    })();
  }, []);

  return user;
};

export default useCurrentUser;
