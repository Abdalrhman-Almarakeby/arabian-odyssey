import ReasonElem from "@/components/ReasonElem";
import SectionHeading from "@/components/SectionHeading";
import { faBuildingColumns, faMountain } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface reasonObj {
  title: string;
  desc: string;
  icon: IconProp;
}

export default function VisitArabiaSection() {
  const reasons: reasonObj[] = [
    {
      title: "Rich cultural and history",
      desc: "The Arab world holds a diverse cultural heritage and a captivating history. From ancient civilizations to the Islamic Golden Age, the region is a cradle of civilization, art, and science. Exploring archaeological sites and historical landmarks offers invaluable insights into humanity's shared heritage.",
      icon: faBuildingColumns,
    },
    {
      title: "Hospitality",
      desc: "Arab culture values hospitality, ensuring visitors are warmly welcomed by locals. This fosters meaningful interactions and connections, enhancing the travel experience and creating lasting memories.",
      icon: faHeart,
    },
    {
      title: "Stunning Landscapes",
      desc: "From the Sahara Desert to the Arabian Peninsula, the Arab lands boast diverse landscapes. Whether it's sand dunes, mountains, or coastlines, exploring these natural environments provides opportunities for adventure, relaxation, and appreciation of nature's beauty.",
      icon: faMountain,
    },
  ];

  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Why visit Arabia ?</SectionHeading>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, i) => (
          <ReasonElem
            title={reason.title}
            desc={reason.desc}
            logo={reason.icon}
            key={i}
          ></ReasonElem>
        ))}
      </div>
    </section>
  );
}
