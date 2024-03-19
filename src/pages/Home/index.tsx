import HotAttractionsSection from "./HotAttractionsSection";
import LandingSection from "./LandingSection";
import VisitArabiaSection from "./VisitArabiaSection";
import TopDestinationsSection from "./TopDestinationsSection";
// import MostVisitedSection from "./MostVisitedSection";
import CategoriesSection from "./CategoriesSection";

export default function Home() {
  return (
    <main className="grid flex-grow gap-20">
      <LandingSection />
      <VisitArabiaSection />
      <HotAttractionsSection />
      <TopDestinationsSection />
      {/* <MostVisitedSection /> */}
      <CategoriesSection />
    </main>
  );
}
