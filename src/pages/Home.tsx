import { Hero } from "../components/Hero";
import { MissionStatement } from "../components/MissionStatement";
import { MissionScroll } from "../components/MissionScroll";
import { InfiniteMarquee } from "../components/InfiniteMarquee";
import { Updates } from "../components/Updates";

export const Home = () => {
  return (
    <>
      <Hero />
      <MissionStatement />
      <MissionScroll />
      <InfiniteMarquee />
      <Updates />
    </>
  );
};
