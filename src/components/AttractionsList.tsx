import { useState } from "react";
import { Attraction as AttractionType } from "@/types/attraction";
import AngleDownSVG from "@/assets/icons/angle-down.svg?react";
import { Attraction } from "./Attraction";

type AttractionsProps = {
  attractions: AttractionType[];
};

export function AttractionsList({ attractions }: AttractionsProps) {
  const attractionsNum = attractions.length;
  const defaultDisplayNum = attractionsNum >= 10 ? 10 : attractionsNum;
  const [displayNum, setDisplayNum] = useState(defaultDisplayNum);

  function addDisplayNum() {
    const newDisplayNum = displayNum + 10;
    if (newDisplayNum >= attractionsNum) {
      setDisplayNum(attractionsNum - 1);
    } else {
      setDisplayNum(newDisplayNum);
    }
  }

  return (
    <div className="flex flex-col items-center">
      {attractions.slice(0, displayNum + 1).map((attraction, i) => (
        <Attraction data={attraction} key={i} />
      ))}
      {displayNum < attractionsNum && (
        <button
          className="flex items-center gap-2 text-xl text-primary duration-300 hover:text-secondary"
          onClick={addDisplayNum}
        >
          Load more <AngleDownSVG />
        </button>
      )}
    </div>
  );
}
