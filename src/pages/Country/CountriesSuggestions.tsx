import DataSlider from "@/components/DataSlider";
import React from "react";

function CountriesSuggestions() {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="font-bold text-2xl mr-2">Other</h2>
        <span className="w-full h-[2px] bg-primary mt-1"></span>
      </div>
      <DataSlider path={"country"} field={"country"} isRated={false} />
    </section>
  );
}

export default CountriesSuggestions;
