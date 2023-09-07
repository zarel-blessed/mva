import { useEffect, useState } from "react";
import Carousal from "./Carousal";
import Wrapper from "./Wrapper";
import fetchDataFromAPI from "../api/fetchDataFromAPI";

const TrendingTV = () => {
  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    fetchDataFromAPI("trending/tv/day?language=en-US").then((data) =>
      setData(data?.results)
    );
  }, []);

  return (
    <Wrapper>
      <Carousal title="OTT & TV" data={data} isTV={true} />
    </Wrapper>
  );
};

export default TrendingTV;
