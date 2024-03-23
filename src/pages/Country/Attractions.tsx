import AttractionsList from "@/components/AttractionsList";

interface AttractionsProps {
  data: [any];
}

function Attractions({ data }: AttractionsProps) {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="font-bold text-2xl mr-2">Attractions</h2>
        <span className="w-full h-[2px] bg-primary mt-1"></span>
      </div>
      <AttractionsList attractions={data}  />
    </section>
  );
}

export default Attractions;
