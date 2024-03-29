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

export function Profile({
  isSearchMenuOpen,
  setIsSearchMenuOpen,
}: ProfileProps) {
  const navigate = useNavigate();
  const { user } = useUser();
  console.log(user);
  const [displayModal, setDisplayModal] = useState<boolean>(false)

  if (!user) {
    navigate("/signin");
  }

  return (
    user && (
      <div className="container flex-grow px-6 pt-10 pb-[100px]">
        <section className="mb-24">
          <h2 className="text-xl font-bold mb-10">WishList</h2>
          {user.WishList.length ? (
            <ItemsSlider attractions={user.WishList} />
          ) : (
            <div className="flex items-center flex-col">
              <NoData />
              <button
                onClick={() => setIsSearchMenuOpen(!isSearchMenuOpen)}
                className="bg-primary text-white py-2 px-3 text-base rounded-[100px] mt-3"
              >
                Browse attractions
              </button>
            </div>
          )}
        </section>
        <section className="flex items-center flex-col">
          <h2 className="text-xl font-bold mb-10 self-start">
            Your contributions
          </h2>
          {user.attractionsAdded.length ? (
            <ItemsSlider attractions={user.attractionsAdded} />
          ) : (
            <NoData />
          )}
          <button onClick={() => setDisplayModal(!displayModal)} className="bg-primary text-white py-2 px-3 text-base rounded-[100px] mt-4">
            Create attraction
          </button>
        </section>
          <CreateAttraction setDisplayModal={setDisplayModal} displayModal={displayModal} />
      </div>
    )
  );
}
