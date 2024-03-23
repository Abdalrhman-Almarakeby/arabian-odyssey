import { useLocation } from "react-router-dom";
import { State } from "@/types/state";
import { InlineBtn } from "./InlineBtn";

type BtnsLineProps = {
  states: State[];
  base: string;
  baseBtn: string | false;
};

export function BtnsLine({ states, base, baseBtn }: BtnsLineProps) {
  const { pathname } = useLocation();
  return (
    <div className="w-full overflow-y-auto py-2">
      {baseBtn && <InlineBtn name="About" base={base} id={false} currentPath={pathname} />}
      {states.map((state, i) => (
        <InlineBtn key={i} base={base} id={state.id} name={state.name} currentPath={pathname} />
      ))}
    </div>
  );
}
