import {useEffect, useState} from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        setData(result);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return {data, isLoading, error};
}