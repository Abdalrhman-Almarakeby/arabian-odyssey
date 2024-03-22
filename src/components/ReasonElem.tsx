import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type reasonItemProps = {
  title: string;
  desc: string;
  logo: IconProp;
};

export function ReasonElem({ title, desc, logo }: reasonItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-[0.625rem] bg-primary/10 p-5 hover:bg-primary">
      <div className="relative z-10">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[0.625rem] bg-primary text-white group-hover:bg-secondary">
          <FontAwesomeIcon size="2xl" icon={logo} />
        </div>
        <h4 className="mb-4.5 text-xl font-bold text-black group-hover:text-white">{title}</h4>
        <p className="font-light group-hover:text-white">{desc}</p>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-[45%]">
        <FontAwesomeIcon
          icon={logo}
          className="-rotate-[10deg] text-[250px] text-primary/20 duration-1000 group-hover:-rotate-[45deg] group-hover:text-secondary"
        />
      </div>
    </div>
  );
}
