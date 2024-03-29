import { useLocation } from "react-router-dom";
import { State } from "@/types/state";
import { InlineBtn } from "./InlineBtn";
import { CategoryData } from "@/types/category";

type BtnsLineProps = {
  states: State[] | CategoryData[];
  base: string;
};

export function BtnsLine({ states, base }: BtnsLineProps) {
  const { pathname } = useLocation();
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 py-2 pb-14">
      {states.map((state) => (
        <InlineBtn
          key={state.id}
          base={base}
          id={state.id}
          name={state.name}
          currentPath={pathname}
        />
      ))}
    </div>
  );
}
