import { useState } from "react";
import Attraction from "./Attraction";

interface AttractionsPorops {
  attractions: [any];
}

function AttractionsList({ attractions }: AttractionsPorops) {
  console.log(attractions);
  const [displayNum, setDisplayNum] = useState(10);
  const attractionsNum = attractions.length;
  const addDisplayNum = () => {
    const newDisplayNum = displayNum + 10;
    if (newDisplayNum >= attractionsNum) {
      setDisplayNum(attractionsNum - 1);
    } else {
      setDisplayNum(newDisplayNum);
    }
  };
  return (
    <div>
      {attractions.slice(0, displayNum + 1).map((attraction: any, i) => (
        <Attraction data={attraction} key={i} />
      ))}
    </div>
  );
}

export default AttractionsList;
