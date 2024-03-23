import AttractionsList from "@/components/AttractionsList";
import noData from "@/assets/imgs/noData.svg";

interface AttractionsProps {
  data: [any];
}

function Attractions({ data }: AttractionsProps) {
  return (
    <section className="mb-15">
      <div className="flex items-center mb-6">
        <h2 className="font-bold text-2xl mr-2">Attractions</h2>
        <span className="w-full h-[2px] bg-primary mt-1"></span>
      </div>
      {data.length ? (
        <AttractionsList attractions={data} />
      ) : (
        <div className="flex flex-col items-center">
          <figure className="max-w-[300px] mb-5">
            <img src={noData} alt="" />
          </figure>
          <p className="">No data was found</p>
        </div>
      )}
    </section>
  );
}

export default Attractions;
