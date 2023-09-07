import { useEffect, useState } from "react";
import Carousal from "./Carousal";
import Wrapper from "./Wrapper";
import fetchDataFromAPI from "../api/fetchDataFromAPI";

const Trending = () => {
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    fetchDataFromAPI("trending/movie/day?language=en-US").then((data) =>
      setData(data?.results)
    );
  }, []);

  return (
    <Wrapper>
      <Carousal title="Trending" data={data} isTV={false} />
    </Wrapper>
  );
};

export default Trending;
