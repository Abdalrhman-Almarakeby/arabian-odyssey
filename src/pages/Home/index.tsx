import { HotAttractionsSection } from "./HotAttractionsSection";
import { LandingSection } from "./LandingSection";
import { VisitArabiaSection } from "./VisitArabiaSection";
import { TopDestinationsSection } from "./TopDestinationsSection";
import { MostVisitedSection } from "./MostVisitedSection";
import { CategoriesSection } from "./CategoriesSection";

export function Home() {
  return (
    <>
      <header>
        <LandingSection />
      </header>
      <main className="flex flex-col items-center gap-20 py-[120px]">
        <VisitArabiaSection />
        <MostVisitedSection />
        <HotAttractionsSection />
        <TopDestinationsSection />
        <CategoriesSection title />
      </main>
    </>
  );
}
