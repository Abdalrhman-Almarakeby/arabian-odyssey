import { useState } from "react";
import Attraction from "./Attraction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface AttractionsPorops {
  attractions: [any];
}

function AttractionsList({ attractions }: AttractionsPorops) {
  const attractionsNum = attractions.length;
  const defaultDisplayNum = attractionsNum >= 10 ? 10 : attractionsNum;
  const [displayNum, setDisplayNum] = useState(defaultDisplayNum);
  const addDisplayNum = () => {
    const newDisplayNum = displayNum + 10;
    if (newDisplayNum >= attractionsNum) {
      setDisplayNum(attractionsNum - 1);
    } else {
      setDisplayNum(newDisplayNum);
    }
  };
  return (
    <div className="flex flex-col items-center">
      {attractions.slice(0, displayNum + 1).map((attraction: any, i) => (
        <Attraction data={attraction} key={i} />
      ))}
      {
        displayNum < attractionsNum &&
          (<button
          className="text-primary text-xl hover:text-secondary duration-300 flex gap-2 items-center"
          onClick={addDisplayNum}
          >
        Load more
        <FontAwesomeIcon icon={faAngleDown} />
      </button>)
    }
    </div>
  );
}

export default AttractionsList;
