type SectionHeadingProps = {
  children: string;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h3 className="relative text-center text-2xl font-bold after:absolute after:-bottom-2 after:left-1/2 after:h-[3px] after:w-[calc(100%-30px)] after:-translate-x-1/2 after:rounded-sm after:bg-primary">
      {children}
    </h3>
  );
}
