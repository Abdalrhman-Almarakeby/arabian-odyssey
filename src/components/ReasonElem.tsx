import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface reasonItemProps {
  title: string;
  desc: string;
  logo: IconProp;
}

function ReasonElem({ title, desc, logo }: reasonItemProps) {
  return (
    <div className="group rounded-[0.625rem] bg-primary/10 hover:bg-primary p-5 relative overflow-hidden">
      <div className="relative z-10">
        <div className="mb-5 w-14 h-14 rounded-[0.625rem] bg-primary group-hover:bg-secondary flex items-center justify-center text-white">
          <FontAwesomeIcon size="2xl" icon={logo} />
        </div>
        <h4 className="mb-4.5 font-bold group-hover:text-white text-black text-xl">
          {title}
        </h4>
        <p className="font-light group-hover:text-white">{desc}</p>
      </div>
      <div className="absolute right-0 bottom-0 translate-x-[45%]">
        <FontAwesomeIcon
          icon={logo}
          className="text-[250px] text-primary/20 -rotate-[10deg] group-hover:-rotate-[45deg] duration-1000 group-hover:text-secondary"
        />
      </div>
    </div>
  );
}

export default ReasonElem;
