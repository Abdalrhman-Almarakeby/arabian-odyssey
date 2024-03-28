import { Attraction as AttractionType } from "@/types/attraction";
import axios from "axios";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { Rating } from "./Rating";
import { HashLink } from "react-router-hash-link";
import { NoData } from "./NoData";

type SearchMenu = {
  isSearchMenuOpen: boolean;
  setIsSearchMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SearchMenu({ isSearchMenuOpen, setIsSearchMenuOpen }: SearchMenu) {
  const [attractions, setAttractions] = useState<AttractionType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredAttractions = attractions.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://arabian-odyssey.vercel.app/attraction")
      .then((res: { data: { attraction: AttractionType[] } }) => {
        setAttractions(res.data.attraction);
      });
  }, []);

  return (
    <Modal
      show={isSearchMenuOpen}
      onClose={() => {
        setIsSearchMenuOpen(false);
        setSearchQuery("");
      }}
    >
      <Modal.Header>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          className=""
          placeholder="Search"
        />
      </Modal.Header>
      <Modal.Body>
        {filteredAttractions.length ? (
          filteredAttractions.map(({ rating, image, name, _id }) => (
            <HashLink
              onClick={() => setIsSearchMenuOpen(false)}
              to={`attraction/${_id}`}
              className="mb-10 flex items-center gap-8 shadow-lg"
              key={_id}
            >
              <img src={image.path} alt="" className="size-20 rounded object-cover" />
              <div className="w-full px-6 pb-8 pt-4 shadow-md sm:max-w-[500px] md:max-w-none md:p-0 md:shadow-none">
                <h3 className="mb-1 text-2xl font-bold">{name}</h3>
                <Rating rating={rating} />
              </div>
            </HashLink>
          ))
        ) : (
          <NoData />
        )}
      </Modal.Body>
    </Modal>
  );
}
