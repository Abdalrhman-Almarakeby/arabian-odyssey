import { HotAttractionsSection } from "./HotAttractionsSection";
import { LandingSection } from "./LandingSection";
import { VisitArabiaSection } from "./VisitArabiaSection";
import { TopDestinationsSection } from "./TopDestinationsSection";
import { MostVisitedSection } from "./MostVisitedSection";
import { CategoriesSection } from "./CategoriesSection";
import { Dispatch, SetStateAction } from "react";


type HomeProps = {
  isSearchMenuOpen: boolean;
  setIsSearchMenuOpen: Dispatch<SetStateAction<boolean>>
}

export function Home({ isSearchMenuOpen, setIsSearchMenuOpen }: HomeProps) {
  return (
    <main>
      <LandingSection setIsSearchMenuOpen={setIsSearchMenuOpen} isSearchMenuOpen={isSearchMenuOpen} />
      <div className="flex flex-col items-center gap-20 py-[120px]">
        <VisitArabiaSection />
        <MostVisitedSection />
        <HotAttractionsSection />
        <TopDestinationsSection />
        <CategoriesSection title />
      </div>
    </main>
  );
}
