import fetchDataFromAPI from "../api/fetchDataFromAPI";
import Carousal from "./Carousal";
import Wrapper from "./Wrapper";
import { useState, useEffect } from "react";

const Popular = () => {
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    fetchDataFromAPI("movie/popular?language=en-US&page=1").then((data) =>
      setData(data?.results)
    );
  }, []);

  return (
    <Wrapper>
      <Carousal title="Popular" data={data} isTV={false} />
    </Wrapper>
  );
};

export default Popular;
