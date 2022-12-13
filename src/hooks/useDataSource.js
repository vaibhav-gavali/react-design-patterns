import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  // add empty dependency to call the useEffect only once even
  // if the containing component will rerender everytime
  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      setResource(result);
    })();
  }, [getResourceFunc]);

  return resource;
};

export default useDataSource;
