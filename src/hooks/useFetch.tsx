import { useEffect, useState } from "react";
import fetchDataFromAPI from "../api/fetchDataFromAPI";

const useFetch = (url: string): { data: any; isLoading: boolean } => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDataFromAPI(url).then((data) => setData(data));
    setIsLoading(false);
  }, []);

  return { data, isLoading };
};

export default useFetch;
