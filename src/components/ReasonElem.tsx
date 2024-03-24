type reasonItemProps = {
  title: string;
  desc: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export function ReasonElem({ title, desc, Icon }: reasonItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-[0.625rem] bg-primary/10 p-5 motion-safe:hover:bg-primary">
      <div className="relative z-10">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[0.625rem] bg-primary text-white motion-safe:group-hover:bg-secondary">
          <Icon className="size-[32px] fill-white" />
        </div>
        <h4 className="mb-4.5 text-xl font-bold text-black motion-safe:group-hover:text-white">
          {title}
        </h4>
        <p className="font-light group-hover:text-white">{desc}</p>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-[45%]">
        <Icon className="size-[290px] -rotate-[10deg] fill-primary/20 duration-1000 motion-safe:group-hover:-rotate-[45deg] motion-safe:group-hover:fill-secondary" />
      </div>
    </div>
  );
}
