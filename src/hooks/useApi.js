import React, {useState} from 'react';

export default useApi = apiFunc => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    const response = await apiFunc(...args);
    if (!response.ok) {
      setError(response.problem);
      setLoading(false);
    } else {
      var data = response.data;
      setData(data);
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
