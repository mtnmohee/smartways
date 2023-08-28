import CarouselCard from "@/components/carouselCard";
import Head from "@/components/head";
import ImageGrid from "@/components/imageGrid";
import Services from "@/components/services";
import BasicTabs from "@/components/tabCard";

function Home() {
  return (
    <div>
      <Head />
      <BasicTabs />
      <hr />
      <Services />
      <hr />
      <ImageGrid />
      <hr />
      <CarouselCard />
    </div>
  );
}

export default Home;
