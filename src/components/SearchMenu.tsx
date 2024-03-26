import { Attraction as AttractionType } from "@/types/attraction";
import axios from "axios";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { Attraction } from "./Attraction";

type SearchMenu = {
  isSearchMenuOpen: boolean;
  setIsSearchMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SearchMenu({ isSearchMenuOpen, setIsSearchMenuOpen }: SearchMenu) {
  const [attractions, setAttractions] = useState<AttractionType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://arabian-odyssey.vercel.app/attraction")
      .then((res: { data: { attraction: AttractionType[] } }) => {
        setAttractions(res.data.attraction);
      });
  }, []);

  return (
    <Modal show={isSearchMenuOpen} onClose={() => setIsSearchMenuOpen(false)}>
      <Modal.Header>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          className=""
          placeholder="Search"
        />
      </Modal.Header>
      <Modal.Body>
        {attractions.map((attraction, i) => {
          if (attraction.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())) {
            return <Attraction data={attraction} key={i} row />;
          }
        })}
      </Modal.Body>
    </Modal>
  );
}
