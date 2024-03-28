import { Input } from "@/components/Input";
import { SubmitButton } from "@/components/SubmitButton";
import { Category } from "@/types/Category";
import { CountryData } from "@/types/Country";
import { State } from "@/types/state";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext"
import axios, { AxiosResponse } from "axios";
import { Modal, ModalBody, ModalHeader, Spinner } from "flowbite-react";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type CreateAttractionProps = {
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
  displayModal: boolean;
};

type FormDataProps = {
  name: string;
  country: string;
  state: string;
  category: string;
  desc: string;
  openingHours: string;
  admissionFees: string;
  image: string;
};

function CreateAttraction({
  setDisplayModal,
  displayModal,
}: CreateAttractionProps) {
  const [submitState, setSubmitState] = useState<
    "unsubmited" | "submiting" | "submited"
  >("unsubmited");
  const [isSuccess, setIsSuccess] = useState<boolean>();
  const [country, setCountry] = useState<CountryData[]>();
  const [state, setState] = useState<State[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    country: "",
    state: "",
    category: "",
    desc: "",
    openingHours: "",
    admissionFees: "",
    image: "",
  });

  const {token} = useLocalStorageToken()

  useEffect(() => {
    if (country) {
      const targetCountry = country.find(
        (item) => item.id === formData.country
      );
      if (targetCountry) setState(targetCountry.states);
    }
  }, [formData.country]);

  useEffect(() => {
    axios
      .get("https://arabian-odyssey.vercel.app/country")
      .then((res: AxiosResponse) => res.data)
      .then((data: { country: CountryData[] }) => setCountry(data.country));

    axios
      .get("https://arabian-odyssey.vercel.app/category")
      .then((res: AxiosResponse) => res.data)
      .then((data: { category: Category[] }) => setCategory(data.category));
  });

  function uploadAttraction(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setSubmitState("submiting");
    axios
      .post(
        "https://arabian-odyssey.vercel.app/attraction",
        formData,
        {
          headers: {
            token: `ArabianOdyssey__${token}`
          }
        }
      )
      .then(() => setIsSuccess(true))
      .catch((e) => {
        console.log(e);
        setIsSuccess(false);
      })
      .finally(() => setSubmitState("submited"));
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <Modal show={displayModal} onClose={() => setDisplayModal(false)}>
      <ModalHeader>Create attraction</ModalHeader>
      <ModalBody>
        {submitState === "unsubmited" ? (
          <form
            className="space-y-4 md:space-y-6"
            method="POST"
            onSubmit={uploadAttraction}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-black"
              >
                Attraction name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Atraction name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-medium text-black"
              >
                Country
              </label>
              <select
                name="country"
                id="country"
                onChange={handleChange}
                required
                className="w-full"
              >
                <option disabled selected>
                  Select country
                </option>
                {country?.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="state"
                className="mb-2 block text-sm font-medium text-black"
              >
                State
              </label>
              <select
                name="state"
                id="state"
                onChange={handleChange}
                required
                className="w-full"
              >
                <option disabled selected>
                  {state.length ? "Select state" : "Select country"}
                </option>
                {state?.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-black"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                onChange={handleChange}
                required
                className="w-full"
              >
                <option disabled selected>
                  Select category
                </option>
                {category?.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="openingHours"
                className="mb-2 block text-sm font-medium text-black"
              >
                Opening Hours
              </label>
              <Input
                type="text"
                name="openingHours"
                id="openingHours"
                value={formData.openingHours}
                onChange={handleChange}
                placeholder="9AM-6PM daily"
                required
              />
            </div>
            <div>
              <label
                htmlFor="admissionFees"
                className="mb-2 block text-sm font-medium text-black"
              >
                Admission Fees
              </label>
              <Input
                type="text"
                name="admissionFees"
                id="admissionFees"
                value={formData.admissionFees}
                onChange={handleChange}
                placeholder="10$ Adults, 6$ children"
                required
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-medium text-black"
              >
                Image
              </label>
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                value={formData.image}
                onChange={handleChange}
                // required
              />
            </div>
            <div>
              <label
                htmlFor="desc"
                className="mb-2 block text-sm font-medium text-black"
              >
                Description
              </label>
              <textarea
                name="desc"
                id="desc"
                className="w-full min-h-[100px]"
                value={formData.desc}
                onChange={handleChange}
                placeholder="Description"
                required
              ></textarea>
            </div>

            <SubmitButton>Create</SubmitButton>
          </form>
        ) : submitState === "submiting" ? (
          <div className="flex w-full items-center justify-center">
          <Spinner size={"xl"} color="primary"/>
          </div>
        ) : isSuccess ? (
          <p className="text-center text-primary">Attraction created successfully</p>
        ) : (
          <p className="text-center text-red-500">Unable to create attraction</p>
        )}
      </ModalBody>
    </Modal>
  );
}

export default CreateAttraction;
