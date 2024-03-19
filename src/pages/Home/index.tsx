import HotAttractionsSection from "./HotAttractionsSection";
import LandingSection from "./LandingSection";
import VisitArabiaSection from "./VisitArabiaSection";
import TopDestinationsSection from "./TopDestinationsSection";
import CategoriesSection from "./CategoriesSection";

export default function Home() {
  return (
    <main className="grid flex-grow gap-20">
      <LandingSection />
      <VisitArabiaSection />
      <HotAttractionsSection />
      <TopDestinationsSection />
      <CategoriesSection />
    </main>
  );
}
