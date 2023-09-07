import HeroBanner from "../components/HeroBanner";
import Popular from "../components/Popular";
import Trending from "../components/Trending";
import TrendingTV from "../components/TrendingTV";

const Home = () => {
  return (
    <div
      style={{ paddingBottom: `3em`, backgroundColor: `var(--clr-primary)` }}
    >
      <HeroBanner />
      <Trending />
      <TrendingTV />
      <Popular />
    </div>
  );
};

export default Home;
