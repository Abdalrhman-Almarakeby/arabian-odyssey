import { NoData } from "@/components/NoData";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ItemsSlider } from "./ItemsSlider";
import { Dispatch, SetStateAction, useState } from "react";
import CreateAttraction from "./CreateAttraction";

type ProfileProps = {
  isSearchMenuOpen: boolean;
  setIsSearchMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export function Profile({ isSearchMenuOpen, setIsSearchMenuOpen }: ProfileProps) {
  const navigate = useNavigate();
  const { user } = useUser();
  console.log(user);
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  if (!user) {
    navigate("/signin");
  }

  return (
    user && (
      <div className="container flex-grow px-6 pb-[100px] pt-10">
        <section className="mb-24">
          <h2 className="mb-10 text-xl font-bold">WishList</h2>
          {user.WishList.length ? (
            <ItemsSlider attractions={user.WishList} />
          ) : (
            <div className="flex flex-col items-center">
              <NoData />
              <button
                onClick={() => setIsSearchMenuOpen(!isSearchMenuOpen)}
                className="mt-3 rounded-[100px] bg-primary px-3 py-2 text-base text-white"
              >
                Browse attractions
              </button>
            </div>
          )}
        </section>
        <section className="flex flex-col items-center">
          <h2 className="mb-10 self-start text-xl font-bold">Your contributions</h2>
          {user.attractionsAdded.length ? (
            <ItemsSlider attractions={user.attractionsAdded} />
          ) : (
            <NoData />
          )}
          <button
            onClick={() => setDisplayModal(!displayModal)}
            className="mt-4 rounded-[100px] bg-primary px-3 py-2 text-base text-white"
          >
            Create attraction
          </button>
        </section>
        <CreateAttraction setDisplayModal={setDisplayModal} displayModal={displayModal} />
      </div>
    )
  );
}
