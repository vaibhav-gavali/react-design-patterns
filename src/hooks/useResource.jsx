import { useState, useEffect } from 'react';
import axios from 'axios';

const useResource = (resourceURL) => {
  const [resource, setResource] = useState(null);

  // add empty dependency to call the useEffect only once even
  // if the containing component will rerender everytime
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceURL);
      setResource(response.data);
    })();
  }, [resourceURL]);

  return resource;
};

export default useResource;
